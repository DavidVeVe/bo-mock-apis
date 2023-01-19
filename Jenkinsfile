node{
    try {
        stage('Checkout'){
            git url: "ssh://git@atlassian.tools.bo.local:7999/uf/mock-apis.git",
                           credentialsId: 'BitBucket-SSH-User',
                           branch: '${BRANCH_NAME}'
        }
        stage ('Git Tagging') {
            if (env.BRANCH_NAME.matches("master")) {
	              sh '''
                    version=$(cat package.json | grep '^.*version' | sed -s 's/[^0-9.]//g')
                    echo "tag does not exist"
                    git tag "$version"
                    echo "Created a new tag, $version"
                    git push --tags

                '''
	          }
        }
        notifySuccessful()
    } catch (e) {
     currentBuild.result = "FAILED"
     notifyFailed()
     throw e
   }
}

def notifySuccessful() {
    def message = sh (returnStdout: true, script: "git log --format=%s -n 1 \$(git log | grep commit | head -n 1 | sed 's/commit //') ")
    echo message
    if (message.contains("Merge pull request ")){
        echo "Matched"
        def email = sh (returnStdout: true, script: "git --no-pager show -s --format='%ae' \$(git log | grep '^commit' | head -n 2 | sed -n 2p | sed 's/commit //') ")
        echo email
        emailext( attachLog: true, body: '''Job Name:  \'${JOB_NAME}[${BUILD_NUMBER}]\'
        Branch: \'${BRANCH_NAME}\'
        Check console output at : ${BUILD_URL}''', replyTo: 'no-reply@blueoptima.com', subject: 'Build Successful: \'${JOB_NAME} \'', to: 'salman.kagzi@blueoptima.com,enrique.ulloa@blueoptima.com,'+ email
        )
    } else {
        echo "NOT"
        def email = sh (returnStdout: true, script: "git --no-pager show -s --format='%ae' \$(git log | grep commit | head -n 1 | sed 's/commit //') ")
        echo email
        emailext( attachLog: true, body: '''Job Name:  \'${JOB_NAME}[${BUILD_NUMBER}]\'
        Branch: \'${BRANCH_NAME}\'
        Check console output at : ${BUILD_URL}''', replyTo: 'no-reply@blueoptima.com', subject: 'Build Successful: \'${JOB_NAME} \'', to: 'salman.kagzi@blueoptima.com,enrique.ulloa@blueoptima.com,'+ email
        )
    }
}
def notifyFailed() {
    def message = sh (returnStdout: true, script: "git log --format=%s -n 1 \$(git log | grep commit | head -n 1 | sed 's/commit //') ")
    echo message

    if (message.contains("Merge pull request ")){
            echo "Matched"
        def email = sh (returnStdout: true, script: "git --no-pager show -s --format='%ae' \$(git log | grep '^commit' | head -n 2 | sed -n 2p | sed 's/commit //') ")
            echo email
            emailext( attachLog: true, body: '''Job Name:  \'${JOB_NAME}[${BUILD_NUMBER}]\'
            Branch: \'${BRANCH_NAME}\'
            Check console output at : ${BUILD_URL}''', replyTo: 'no-reply@blueoptima.com', subject: 'Build Failed: \'${JOB_NAME} \'', to: 'salman.kagzi@blueoptima.com,enrique.ulloa@blueoptima.com,'+ email
            )
    } else {
        echo "NOT"
        def email = sh (returnStdout: true, script: "git --no-pager show -s --format='%ae' \$(git log | grep commit | head -n 1 | sed 's/commit //') ")
        echo email
            emailext( attachLog: true, body: '''Job Name:  \'${JOB_NAME}[${BUILD_NUMBER}]\'
            Branch: \'${BRANCH_NAME}\'
            Check console output at : ${BUILD_URL}''', replyTo: 'no-reply@blueoptima.com', subject: 'Build Failed: \'${JOB_NAME} \'', to: 'salman.kagzi@blueoptima.com,enrique.ulloa@blueoptima.com,'+ email
            )
    }
}