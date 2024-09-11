from rest_framework import serializers
from .models import *


class ItemSerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        rep = super().to_representation(instance)
        if rep['avatar'] is not None:
            rep['avatar'] = instance.avatar.url

        return rep


class UserSerializer(ItemSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'password', 'phone_number', 'sex',
                  'avatar', 'role']
        extra_kwargs = {'password': {'write_only': True}}  # Ẩn mật khẩu khi trả về


class DoctorSerializer(UserSerializer):
    class Meta:
        model = Doctor
        fields = UserSerializer.Meta.fields + ['speciality']
        extra_kwargs = {'password': {'write_only': True}}  # Ẩn mật khẩu khi trả về

    def create(self, validated_data):
        user = Doctor(**validated_data)
        user.set_password(validated_data['password'])
        user.save()

        return user


class NurseSerializer(UserSerializer):
    class Meta:
        model = Nurse
        fields = UserSerializer.Meta.fields + ['department']
        extra_kwargs = {'password': {'write_only': True}}  # Ẩn mật khẩu khi trả về

    def create(self, validated_data):
        user = Nurse(**validated_data)
        user.set_password(validated_data['password'])
        user.save()

        return user


class PatientSerializer(UserSerializer):
    class Meta:
        model = Patient
        fields = UserSerializer.Meta.fields + ['date_of_birth', 'email']
        extra_kwargs = {'password': {'write_only': True}}  # Ẩn mật khẩu khi trả về

    def create(self, validated_data):
        user = Patient(**validated_data)
        user.set_password(validated_data['password'])
        user.save()

        return user


class AppointmentSerializer(serializers.ModelSerializer):
    patient = PatientSerializer
    doctor = DoctorSerializer

    class Meta:
        model = Appointment
        fields = ['id', 'selected_time', 'selected_date', 'patient', 'doctor', 'status']


class MedicineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicine
        fields = ['id', 'name', 'price', 'unit', 'usage']


class PrescriptionMedicineSerializer(serializers.ModelSerializer):
    medicine = MedicineSerializer

    class Meta:
        model = PrescriptionMedicine
        fields = ['id', 'medicine', 'prescription', 'quantity']


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'name', 'price']


class PrescriptionSerializer(serializers.ModelSerializer):
    prescription_medicine = PrescriptionMedicineSerializer(many=True, required=False)

    services = ServiceSerializer(many=True, required=False)

    class Meta:
        model = Prescription
        fields = ['appointment', 'symptom', 'sick', 'services', 'prescription_medicine']
        extra_kwargs = {
            'services': {'required': False},
            'prescription_medicine': {'required': False},
        }

    # def create(self, validated_data):
    #     data = validated_data.pop('prescription_medicine', [])
    #     prescription = Prescription.objects.create(**validated_data)
    #     for d in data:
    #         medicine = Medicine.objects.get(id=d['b']['id'])
    #         PrescriptionMedicine.objects.create(prescription=prescription, medicine=medicine, quantity=d['quantity'])
    #     return prescription


# class BillSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Bill
#         fields = ['prescription', 'nurse', 'status', 'total']

class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = ['prescription', 'status', 'total','zalopay_id']

class CreatePaymentSerializer(serializers.Serializer):
    amount = serializers.IntegerField(required=True)
    description = serializers.CharField(required=True)