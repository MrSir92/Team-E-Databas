from rest_framework import serializers
from todoapp.models import Need, Offer, User

class NeedSerializer(serializers.ModelSerializer):
    """
    A serialzier for our Need-model.
    """

    class Meta:
        model = Need
        fields = (
            'title',
            'id',
            'created_at',
            'updated_at',
            'user_id',
            'category',
            'description'
        )

class OfferSerializer(serializers.ModelSerializer):
    """
    A serialzier for our Offer-model.
    """

    class Meta:
        model = Offer
        fields = (
            'title',
            'id',
            'created_at',
            'updated_at',
            'user_id',
            'category',
            'description'
        )

class UserSerializer(serializers.ModelSerializer):
    """
    A serialzier for our User-model.
    """

    class Meta:
        model = User
        fields = (
            'name',
            'id',
            'created_at',
            'email',
            'phone',
            'adress',
            'description'

        )

class UserDetailSerializer(serializers.ModelSerializer):
    """
    A serializer for viewing a User
    """

    class Meta:
        model = User
        fields = (
            'name',
            'created_at',
            'email',
            'phone',
            'adress',
            'description'
        )

class NeedDetailSerializer(serializers.ModelSerializer):
    """
    A serializer for viewing a Need
    """

    class Meta:
        model = Need
        fields = (
            'title',
            'id',
            'created_at',
            'updated_at',
            'user_id',
            'category',
            'description'
        )

class OfferDetailSerializer(serializers.ModelSerializer):
    """
    A serializer for viewing an Offer
    """

    class Meta:
        model = Offer
        fields = (
            'title',
            'id',
            'created_at',
            'updated_at',
            'user_id',
            'category',
            'description'
        )

class UserNeedListSerializer(serializers.ModelSerializer):
    """
    A serializer for viewing a Users Needs
    """

    class Meta:
        model = Need
        fields = (
            'title',
            'id',
            'created_at',
            'updated_at',
            'user_id',
            'category',
            'description'
        )

class UserOfferListSerializer(serializers.ModelSerializer):
    """
    A serializer for viewing a Users Offers
    """

    class Meta:
        model = Offer
        fields = (
            'title',
            'id',
            'created_at',
            'updated_at',
            'user_id',
            'category',
            'description'
        )

class NeedCategorySerializer(serializers.ModelSerializer):
    """
    A serializer for viewing a Users Needs
    """

    class Meta:
        model = Need
        fields = (
            'title',
            'id',
            'created_at',
            'updated_at',
            'user_id',
            'category',
            'description'
        )

class OfferCategorySerializer(serializers.ModelSerializer):
    """
    A serializer for viewing a Users Needs
    """

    class Meta:
        model = Offer
        fields = (
            'title',
            'id',
            'created_at',
            'updated_at',
            'user_id',
            'category',
            'description'
        )

class UserListSerializer(serializers.ModelSerializer):
    """
    A serializer for viewing a Users Needs
    """

    class Meta:
        model = User
        fields = (
            'name',
            'id',
            'created_at',
            'updated_at',
            'user_id',
            'category',
            'description'
        )
