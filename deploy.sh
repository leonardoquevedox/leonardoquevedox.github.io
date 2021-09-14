# Starts deployment service
echo 'Starting deployment script...'

# Build stage
echo 'Starting build stage...'
yarn build

# # Github page deployment stage
# echo 'Starting Github page deployment stage...'
# # ---- Copies CNAME to public folder
# cp ./CNAME ./public/CNAME
# # ---- Copies CNAME to public folder
# cp ./.gitignore ./public/.gitignore
# # ---- Copies CNAME to public folder
# git add .
# # ---- Copies CNAME to public folder
# git subtree split --prefix public -b gh-pages
# # ---- Copies CNAME to public folder
# git commit -m
# # ---- Copies CNAME to public folder
# git push origin main -f
# # ---- Copies CNAME to public folder
# git push origin gh-pages -f