pipeline {
    agent any

    environment {
        FIREBASE_TOKEN = credentials('FIREBASE_CI_TOKEN')
        FIREBASE_ADMIN_JSON = credentials('FIREBASE_ADMIN_JSON')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/HussienShousha/Cloud_Task.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Setup Firebase') {
            steps {
                bat 'copy %FIREBASE_ADMIN_JSON% task-tracker-162e0-firebase-adminsdk-fbsvc-d509e6d5f9.json'
            }
        }

        stage('Deploy to Firebase') {
            steps {
                bat 'firebase deploy --only hosting --token %FIREBASE_TOKEN%'
            }
        }
    }

    post {
        success {
            echo 'Deployment succeeded!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
