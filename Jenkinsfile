pipeline {
    agent any

    environment {
        FIREBASE_TOKEN = credentials('FIREBASE_TOKEN')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/HussienShousha/Cloud_Task.git'
            }
        }

        
 	  stage('Build Project') {
            steps {
                sh '''
                    npm install
                    npm run build || echo "No build step available"
                '''
            }
        }

      


         stage('Deploy to Firebase') {
            steps {
                sh '''
                    firebase deploy --token "$FIREBASE_TOKEN"
                '''
            }
        }
    }

    post {
        success {
             echo "Firebase deploy completed successfully!"
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
