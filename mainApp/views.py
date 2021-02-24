from django.shortcuts import render
from django.shortcuts import redirect, render
from django.http.response import JsonResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt
import ast
# Create your views here.
@csrf_exempt
def mainpage(request):
    if(request.method == "POST"):
        pv = request.POST.dict()
        print(pv)
        posts = Post.objects.order_by('modified_at')[int(pv['value']):int(pv['value'])+3] # value['value'] is the last number of post lists before xhr
        posts_image = Post_Image_Url.objects
        context = {'value':pv['value'],'posts':queryset_to_json(posts),'posts_images':queryset_to_json(posts_image),'type':'posts'}
        return JsonResponse(context) # send data with Json
    else:
        #load model posts and posts images
        posts = Post.objects.order_by('modified_at')[:3]
        posts_image = Post_Image_Url.objects
        #load model Bulletin_board
        bulletin_board = Bulletin_board.objects.order_by('modified_at')[:10]
        context = { 'posts' : queryset_to_json(posts),'posts_images':queryset_to_json(posts_image),'bulletin_board':queryset_to_json(bulletin_board)}
        return render(request,'mainPage.html',context)


def create_post(request):
    return render(request,'createpostpage.html')
        
# change queryset to json when there is array in
def queryset_to_json(objects):
    arr = []
    for object in objects.values():
        arr.append(object)
    return arr
