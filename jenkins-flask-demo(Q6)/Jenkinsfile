pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/YOUR_USERNAME/jenkins-flask-demo.git'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'pip install -r requirements.txt'
            }
        }

        stage('Test') {
            steps {
                echo 'No tests added yet'
            }
        }

        stage('Run App') {
            steps {
                echo 'App would run here or be deployed.'
            }
        }
    }
}
