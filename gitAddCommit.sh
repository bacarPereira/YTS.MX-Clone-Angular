state=true
while [ $state ]; do
  echo 'Enter the commit message ✍:'
  read commitMessage
  git add .
  git commit -m "$commitMessage"
  echo 'Commit was add'
done
