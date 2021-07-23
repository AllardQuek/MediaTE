<p align="center">
    <h1 align="center"> MediaTE </h1>
</p>
<p align="center">
  <img src="/readme/logo.png" />
</p>

## Inspiration ✨
The COVID19 pandemic has limited the frequency face-to-face interactions. The lack of physical lessons may make it harder to be engaged in learning. MediaTE aims to bring a "people element" to a digitised education, increasing engagement by turning mundane walls of text into exciting videos narrated by any person of your choice. We hope to MediaTE between the physical limitations of a pandemic and the advantages of online learning!

## What it does 🔥
MediaTE (Media To Educate) addresses three problems:
1. Reading walls of text can be boring. MediaTE will convert a plain wall of text into an entertaining video voiced by your favourite characters or idols. 
2. Large walls of text are hard to digest. MediaTE distills the essence of tedious paragraphs in an instant by generating concise content summaries.
3. The Internet is largely written in English, presenting a language barrier to many people. MediaTE offers the option to create videos translated into another language, in this case, Chinese!

## How we built it 🛠
We built the frontend using React and deployed the app on Vercel. The backend is written in Python, with the text-to-speech done by AWS Polly and video generation using Wav2Lip. We are using AWS Lambda and Amazon API GateWay to support the automation of the file uploads and to run our model on Amazon SageMaker.

**Handling of user data:** After receiving and processing uploaded media, we immediately delete it from S3. Any media uploaded is not stored anywhere and is removed once the output video is generated and sent back to the user. 

![Alt text](/readme/architecture.png "Solution Architecture")


## Challenges we ran into 🧗
1. Limited Time -  As we only had 24 hours to work on our hack, we were only able to implement adequate functionality to tackle the problem. If not for the tight deadline, we would have been able to implement additional features into our hack such that it would be better equipped to address the issue.

2. Limited Budget - Due to the fact that we do not have a budget to work with, we were only able to support the creation of 1 video at any one time. In order to minimise the cost that we will incur, we are only able to turn the features on while we're developing. If you'd like to test the features out, please reach out to us at [mediate.official@gmail.com](mailto:mediate.official@gmail.com) to make arrangements with us.

## Accomplishments that we're proud of 🏆
We are proud that our hack can potentially brighten things up in the age of virtual classrooms and help to minimise zoom fatigue. The translation feature that we have included makes our hack Boomer-friendly as well. We are confident that the concept of our hack can attract students and educators alike and see real-life uses. 

## What we learned 🎓
1. Working in a team using Git and GitHub
    - Our team members have never worked in groups before and we are mostly used to solo or pair projects at best
    - We ran into many conflicts while trying to sync our changes together, but with a fair bit of googling and endurance, we managed to pick up a few important pointers to take note of when working with other developers
2. Amazon Web Services
    - Only one of our team members was familiar with AWS so it took awhile for us to understand how the different cloud services would work together in a pipeline to ultimately deliver the output we wanted
    - In summary, we learned about Lambda, S3, API GateWay, SageMaker and not to forget IAM policies!
    - A big part of using cloud services is also security, and with that we had to learn how to keep our data stored secure and to grant least privilege access as much as we could
3. APIs
    - We gained familiarity with using a variety of natural language APIs while we were sourcing for a suitable candidate for our application, and also had some fun along the way!
4. VS Code
    - We learnt to use VSCode Live Share to work together as well :)

## Disclaimers 🙊
Please only make 1 submission at a time. Only your latest request will be processed, provided there are no other requests currently in progress. This is because our operations cost real money and we have a limited budget. Additionally, this will allow more users the chance to get to use this application. That is also why there is a maximum file size of 10MB imposed. If you face any issues, please reach out to us at mediate.official@gmail.com. Thank you!

Note that the quality of the generated video may be reduced to speed up our processing and reduce consumption of our limited resources. We seek your understanding on these matters. Thank you!

## What's next for MediaTE 🏃‍♂️
- Support for more languages; we only implemented translation to Chinese due to time constraints.
- Improve the concurrency of our system; right now, our hack is only able to support the creation of 1 such video at any one time and only the latest requests will be processed, provided that there are no other users using it at that time.
