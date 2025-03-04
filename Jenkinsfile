pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.50.1-noble'
            args '--network qatw_skynet'
        }
    }
     stages {
        stage('Install Allure') {
            steps {
                script {
                    // Instalar o Allure CLI no container
                    sh 'npm install -g allure-commandline --save-dev'
                }
            }
        }

    stages {
        stage('Node.js Deps') {
            steps {
                sh 'npm install'
            }
        }
        stage('E2E Tests') {
            steps {
                sh 'npx playwright test'
                allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            }
        }
    }
    
}