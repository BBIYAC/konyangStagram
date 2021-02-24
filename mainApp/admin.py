from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import *
# Register your models here.

class User_Info_Admin(admin.ModelAdmin):
    list_display = ['account_id','password','name','major','student_id','user_email','college_mail','created_at']


admin.site.register(us_info,User_Info_Admin)
admin.site.register(Profile)
admin.site.register(My_Board_list)
admin.site.register(Bookmarked_board)
admin.site.register(Bulletin_board)
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Post_Image_Url)