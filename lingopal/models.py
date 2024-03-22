from django.db import models

class Language(models.Model):
    name = models.CharField(max_length=50)

    class Meta:
        db_table = 'languages'

    def __str__(self):
        return self.name


class UserProfile(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=128)  # You might want to use a more secure way to store passwords in production
    profile_pic = models.ImageField(upload_to='profile_pics/')  # Assuming you have an 'uploads' directory in your media root
    native_languages = models.ManyToManyField(Language, related_name='native_speakers')
    language_to_learn = models.ForeignKey(Language, on_delete=models.CASCADE, related_name='learners', null=True)
    about_me = models.TextField()

    class Meta:
        db_table = 'user_profiles'

    def __str__(self):
        return self.username
