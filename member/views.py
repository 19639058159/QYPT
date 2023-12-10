from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.



def home(request):
    # return HttpResponse(content='平台首页',charset='utf-8', content_type='text/html')
    return render(request, 'login/login.html')