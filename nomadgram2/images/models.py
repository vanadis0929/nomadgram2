from django.db import models
from nomadgram2.users import models as user_models
from django.utils.encoding import python_2_unicode_compatible
# Create your models here.

@python_2_unicode_compatible
class TimeStampModel(models.Model):

    # 자동으로 날짜가 추가되게끔 처리 
    created_at = models.DateTimeField(auto_now_add=True)

    #모델이 갱신되면 자동으로 새로고침
    updated_at = models.DateTimeField(auto_now=True)

    #abstract 모델임을 하기위해 meta Class를 생성 (db와 연결되지 않는 모델, 다른모델들을 위한 base로 사용 )
    class Meta:
        abstract = True

@python_2_unicode_compatible
class Image(TimeStampModel):
    """ Image Model """

    file = models.ImageField()
    location = models.CharField(max_length=140)       
    caption = models.TextField() 
    creator = models.ForeignKey(user_models.User, null=True)

    #이미지의 표현법 정의
    def __str__(self):
        return '{} = {}'.format(self.location, self.caption )

@python_2_unicode_compatible
class Comment(TimeStampModel):
     """ Comment Model """
     message = models.TextField()
     creator = models.ForeignKey(user_models.User, null=True)
     image = models.ForeignKey(Image, null=True)

     def __str__(self):
        return self.message

@python_2_unicode_compatible
class Like(TimeStampModel):
    """ Like Model """
    creator = models.ForeignKey(user_models.User, null=True)        
    image = models.ForeignKey(Image, null=True)

    def __str__(self):
         return 'user: {} -  image caption: {}'.format(self.creator.username, self.image.caption)