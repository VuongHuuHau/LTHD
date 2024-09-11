import { View, Text, Image, ScrollView, Platform, KeyboardAvoidingView } from "react-native";
import { Button, HelperText, TextInput, TouchableRipple } from "react-native-paper";
import MyStyles from "../../styles/MyStyles";
import * as ImagePicker from 'expo-image-picker';
import React from "react";
import APIs, { endpoints } from "../../configs/APIs";
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker'; // Add Picker for sex selection

const Register = () => {
    const [patients, setPatients] = React.useState({
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        confirm: '',
        email: '',
        phone_number: '',
        sex: 'Male',
        date_of_birth: '',
        avatar: null,
        role: 'Patient'
    });
    const fields = [{
        "label": "Tên",
        "icon": "text",
        "name": "first_name"
    }, {
        "label": "Họ và tên lót",
        "icon": "text",
        "name": "last_name"
    }, {
        "label": "Tên đăng nhập",
        "icon": "account",
        "name": "username"
    }, {
        "label": "Mật khẩu",
        "icon": "eye",
        "secureTextEntry": true,
        "name": "password"
    }, {
        "label": "Xác nhận mật khẩu",
        "icon": "eye",
        "secureTextEntry": true,
        "name": "confirm"
    }, {
        "label": "Số điện thoại",
        "icon": "text",
        "name": "phone_number"
    }, {
        "label": "Ngày sinh (YYYY-MM-DD)",
        "icon": "calendar",
        "name": "date_of_birth"
    }, {
        "label": "Email",
        "icon": "text",
        "name": "email"
    }];
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const navigation = useNavigation();

    const picker = async () => {
        let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert("Permissions denied!");
        } else {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.canceled)
                setPatients(current => {
                    return { ...current, "avatar": result.assets[0] }
                });
        }
    }

    const register = async () => {
        if (patients.password !== patients.confirm) {
            setError(true);
            return;
        } else {
            setError(false);
        }

        setLoading(true);
        try {
            let form = new FormData();
            for (let key in patients)
                if (key !== 'confirm')
                    if (key === 'avatar' && patients.avatar) {
                        form.append(key, {
                            uri: patients.avatar.uri,
                            name: patients.avatar.fileName || 'avatar.jpg',
                            type: patients.avatar.type || 'image/jpeg'
                        });
                    } else {
                        form.append(key, patients[key]);
                    }

            let res = await APIs.post(endpoints['register'], form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (res.status === 201) {
                 //navigation.navigate("Login");
                console.log("đăng ký thành công");
            }
        } catch (ex) {
            console.log(ex);
        } finally {
            setLoading(false);
        }
    }

    const updateState = (field, value) => {
        setPatients(current => {
            return { ...current, [field]: value }
        });
    }

    return (
        <View style={[MyStyles.container, MyStyles.margin]}>
            <ScrollView>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    {fields.map(f => (
                        <TextInput
                            key={f.label}
                            value={patients[f.name]}
                            onChangeText={t => updateState(f.name, t)}
                            style={MyStyles.margin}
                            label={f.label}
                            secureTextEntry={f.secureTextEntry}
                            right={<TextInput.Icon icon={f.icon} />}
                        />
                    ))}

                    <View style={MyStyles.margin}>
                        <Text style={MyStyles.label}>Giới tính</Text>
                        <Picker
                            selectedValue={patients.sex}
                            onValueChange={(itemValue, itemIndex) => updateState('sex', itemValue)}
                            style={MyStyles.picker}
                        >
                            <Picker.Item label="Nam" value="Male" />
                            <Picker.Item label="Nữ" value="Female" />
                            
                        </Picker>
                    </View>

                    <TouchableRipple onPress={picker}>
                        <Text style={MyStyles.margin}>Chọn hình đại diện...</Text>
                    </TouchableRipple>

                    <HelperText type="error" visible={error}>
                        Mật khẩu không khớp!
                    </HelperText>

                    {patients.avatar && <Image source={{ uri: patients.avatar.uri }} style={MyStyles.avatar} />}

                    <Button style={MyStyles.margin} loading={loading} icon="account" mode="contained" onPress={register}>
                        Đăng ký
                    </Button>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
}

export default Register;
