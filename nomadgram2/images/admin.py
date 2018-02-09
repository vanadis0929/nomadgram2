from django.contrib import admin
from . import models
# Register your models here.

@admin.register(models.Like)
class LikeAdmin(admin.ModelAdmin):
    list_display = (
        'creator',
         'image',
        'created_at',
        'updated_at',
    ) 
    
@admin.register(models.Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = (
        'message',
        'creator',
       'image',
        'created_at',
        'updated_at',              
    ) 

@admin.register(models.Image)
class ImageAdmin(admin.ModelAdmin):

    #클릭하면 수정가능
    list_display_links =(
        'location',
    )

    #검색필드 정의
    search_fields =(
        'location',
        'caption',
    )

    #검색필드 정의
    list_filter =(
        'location',
        'caption',
    )


    list_display = (
        'created_at',
        'updated_at',          
        'file',
        'location',
        'caption',
        'creator'
    ) 



