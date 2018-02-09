from django.contrib.auth.models import AbstractUser
from django.core.urlresolvers import reverse
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _


@python_2_unicode_compatible
class User(AbstractUser):

    """ User Model """ 
    #성별관련 상수 선언
    GENDER_CHOICES = {
        ('male', 'Male'),
        ('female', 'Female'),
        ('not-specified', 'Not specified')
    }
    # First Name and Last Name do not cover name patterns
    # around the globe.
    # 생성전에 추가한 값들을 기본값(공백) 으로 남기려면 null=True
    
    name = models.CharField(_('Name of User'), blank=True, max_length=255)
    website = models.URLField(null=True)
    bio = models.TextField(null=True)
    phone = models.CharField(max_length=120,null=True)
    gender = models.CharField(max_length=80, choices=GENDER_CHOICES, null=True)

    #다른모델이 아닌 자신에게 연결하기때문에 self를 사용
    followers = models.ManyToManyField("self")
    following = models.ManyToManyField("self")

    def __str__(self):
        return self.username

    def get_absolute_url(self):
        return reverse('users:detail', kwargs={'username': self.username})
