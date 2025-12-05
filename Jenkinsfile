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
      
                bat 'npm install -g firebase-tools'

       
                bat '''  setx PATH "%APPDATA%\\npm;%PATH%" '''

       
                bat 'copy "%FIREBASE_ADMIN_JSON%" "firebase-admin.json"'
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
