## Inspiration
The COVID19 pandemic has limited the frequency face-to-face interactions. The lack of physical lessons may make it harder to be engaged in learning. MediaTE aims to bring a "people element" to digitised learning, increasing engagement by turning mundane walls of text into exciting videos narrated by any person of your choice.

## What it does
MediaTE (Media To Educate) is a platform that allows users to:
1. Convert a plain wall of text into an entertaining video voiced by their favourite characters or idols. 
2. Distil the essence of tedious paragraphs in an instant.
3. Overcome challenges faced by learners of English as their second language.

## How we built it 🛠
We built the frontend using React and deployed the app on Vercel. The backend is written in Python, with the text-to-speech done by AWS Polly and video generation using Wav2Lip. We are using AWS Lambda and Amazon API GateWay to support the automation of the file uploads and to run our model on Amazon SageMaker.

![Alt text](/readme/architecture.png "Solution Architecture")


## Challenges we ran into 🧗
1. Limited Time
    As we only had 24 hours to work on our hack, we were only able to implement adequate functionality to tackle the problem. If not for the tight deadline, we would have been able to implement additional features into our hack such that it would be better equipped to address the issue.

2. Limited Budget
    Due to the fact that we do not have a budget to work with, we were only able to support the creation of 1 video at any one time. In order to minimise the cost that we will incur, we are only able to turn the features on while we're developing. If you'd like to test the features out, please reach out to us at [mediate.official@gmail.com](mailto:mediate.official@gmail.com) to make arrangements with us.

## Accomplishments that we're proud of
We are proud that our hack can potentially brighten things up in the age of virtual classrooms and help to minimise zoom fatigue. The translation feature that we have included makes our hack Boomer-friendly as well. We are confident that the concept of our hack can attract students and educators alike and see real-life uses. 

## What we learned

## What's next for MediaTE
- Support for more languages; we only implemented translation to Chinese due to time constraints.
- Improve the concurrency of our system; right now, our hack is only able to support the creation of 1 such video at any one time and only the latest requests will be processed, provided that there are no other users using it at that time.
