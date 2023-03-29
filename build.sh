echo "Building!"

rm -r ./server/public

cd ./website
npm run build
cd ..

mv ./website/dist ./server/public

echo "Done?"