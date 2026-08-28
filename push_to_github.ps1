param(
  [string]$remote = 'origin',
  [string]$branch = 'main',
  [string]$message = 'Add Samsung Wallet pass template and site'
)

Write-Host "Staging changes..."
git add .

Write-Host "Committing with message: $message"
git commit -m $message

Write-Host "Pushing to $remote/$branch..."
git push $remote $branch

Write-Host "Done. If this fails, ensure your git remote is configured and you have permission to push."
