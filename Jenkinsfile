
pipeline{
agent{label 'labelname'}
options{
// only keeps the last 10 builds of this pipelone
buildDiscarder(logRotator(numToKeepStr: '10'))
// adds timestamps to build logs
}
tools
{
jdk 'JDK_1.8.0-222'
maven 'Maven-Dedicated-Slaves-Only'
}
stages
{
stage('setup')
{
steps
  {
/* set all variariables for job *? */
/*in order to put all the variables craeted in this script block use the following syntax: sh([script: "echo \"Value:$GIT_COMMIT}\]) */
script
{
BRANCH_NAME=sh(script:"echo $GIT_BRANCH|sed -e 's|origin/||g'",returnStdout:true).trim()
  if("$BRANCH_NAME}"=='master')
  {
    echo"BRANCH_NAME:${BRANCH_NAME}"
    BUILD_VERSION='2019.99.0'
    echo "BUILD_VERSION=${BUILD_VERSION}"
  }
  else
  {
    BUILD_VERSION=sh(script:"echo $GIT_BRANCH |sed -e 's|origin/release.||g'",returnStdout:true).trim()
    echo "BUILD_VERSION=${BUILD_VERSION}"
  }
  /*component id need for depoy job */
  UDEPLOY_COMPONENT_ID='component id'
  GIT_COMMIT=sh([script: "git rev-parse HEAD",returnStdout:true]).trim()
  NEXUS_VERSION=sh([script: "git rev-list ${GIT_COMMIT} --count",returnStdout:true]).trim()
  GIT_SIMPLE=sh([script: "git rev-list ${GIT_COMMIT} |head -n 1 |cut -c 1-5",returnStdout:true]).trim()
  //get latest successful build name
  build =currentBuild
  while(build!=null && build.result !='SUCCESS')
  build=build.previousBuild
}
    if (build==null)
    {
      //this means there has not been a success fill build yet
      PREVIOUS_BUILD_VERSION='none'
    }
    else
    {
      PREVIOUS_BUILD_VERSION=build.displayName
    }
    echo "LAST SUCCESS BUILD NAME: ${PREVIOUS_BUILD_VERSION}"
    //srt jenkisn build name to be same as artifact version that will be published
    currentBuild.displayName="${BUILD_VERSION}.${NEXUS_VERSION}-${GIT_SIMPLE}"
  }
}
}
  stage('pre-build")
        {
          steps
          {
            //set build version for projcet componet 
            sh 'echo "Updating pom version"'
            echo"BUILD_VERSION=${BUILD_VERSION}"
            configFileProvider([configFile(fileId: 'articatory-global-settings-file', variable: 'ArtifactoryGlobalSettings')])
            sh """mvn versions: set -DnewVersion=${BUILD_VERSION}-SNAPSHOT -B """
          }
        }
        }
        stage('build')
        {
          steps
          {
            // build project without tests
            sh 'echo "deploying SNAPSHOT CODE"'
            withCredentials([usernamePassword(credentialId: "artifact id" passwordVariable:'RELEASE_DEPLOY_PWD" usernameVariable:'RELEASE_DEPLOY_ID')])
            {
            withCredentials([usernamePassword(credentialId: "artifact id" passwordVariable:'SNAPSHOT_DEPLOY_PWD" usernameVariable:'SNAPSHOT_DEPLOY_ID')])
            { 
         configFileProvider([configFile(fileId: 'articatory-global-settings-file', variable: 'ArtifactoryGlobalSettings')])
              {
                sh """ mvn -B -s $ArtifactoryGlobalSettings -Drelease_deployer_id=$RELEASE_DEPLOY_ID -Drelease_deployer_pwd=$RELEASE_DEPLOY_PWD -Dsnapshot_deployer_id=$SNAPSHOT_DEPLOY_ID -Dsnapshot_deployer_pwd=$SNAPSHOT_DEPLOY_PWD clean deploy -Dmaven.test.skop -Passmebly """
              }
            }
            }
            }
           }
                                              
    stage ('pre-relaese')
       {
         steps
         {
           // set build bversion
           sh 'echo "replacing SNAPSHOT with release number in pom.xml "'
           configFileProvider([configFile(fileId: 'articatory-global-settings-file', variable: 'ArtifactoryGlobalSettings')])
           {
             sh """ mvn versions: set -B -DnewVersion =${BUILD_VERSION}.${NEXUS_VERSION}-${GIT_SIMPLE}"""
           }
         }
       }
        
     stage('publish")
           {
             steps
             {
               sh 'echo"deploy appllictaion"'
               
     withCredentials([usernamePassword(credentialId: "artifact id" passwordVariable:'RELEASE_DEPLOY_PWD" usernameVariable:'RELEASE_DEPLOY_ID')])
            {
            withCredentials([usernamePassword(credentialId: "artifact id" passwordVariable:'SNAPSHOT_DEPLOY_PWD" usernameVariable:'SNAPSHOT_DEPLOY_ID')])
            { 
         configFileProvider([configFile(fileId: 'articatory-global-settings-file', variable: 'ArtifactoryGlobalSettings')])
              {
                sh """ mvn -B -s $ArtifactoryGlobalSettings -Drelease_deployer_id=$RELEASE_DEPLOY_ID -Drelease_deployer_pwd=$RELEASE_DEPLOY_PWD -Dsnapshot_deployer_id=$SNAPSHOT_DEPLOY_ID -Dsnapshot_deployer_pwd=$SNAPSHOT_DEPLOY_PWD clean deploy -Dmaven.test.skop -Passmebly """
              }
            }
            }
            }
           }
   stage (' Trigger import of component version')
                                            
    {
      when
      {
        expression
        {
          return env. UDEPLOY_COMPONENT_ID!='';
        }
      }
      steps
      {
        sh 'echo"import version for component"'
        withCredentials([usernamePassword(credentialsId: 'UDEPLOY credentials id' usernameVariable: 'UDEPLOY_USER' passwordVariable: 'UDEPLOY_PWD')])
        {
          sh """ curl -k -u ${UDEPLOY_USER}:${UDEPLOY_PWD} https://udeploy.con:8443/cli/component/integrate -X put -d {"component:${COMPONENT_ID}"}
          }
          sleep 10
          }
          }
          }
          }
      
                               
                                           
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
