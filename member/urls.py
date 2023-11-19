# -*— coding: utf-8 -*-

"""
@author: 刘金宇
@software: PyCharm
@file: urls.py
@time: 2023/11/19 14:07 
"""
from django.urls import path
from . import views
urlpatterns = [
    path('home/', views.home, name='平台首页')
]
