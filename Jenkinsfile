
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
