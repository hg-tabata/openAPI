▼フロント
npx openapi-typescript-codegen --input openapi.yaml --output src/api

▼バックエンド
※Java 8以上が必要
npx @openapitools/openapi-generator-cli generate \
  -i openapi.yaml \
  -g nodejs-express-server \
  -o backend

▼ドキュメント
openapi-generator-cli generate -i openapi.yaml -g html2 -o ./docs
