# Karabiner NICOLA

Karabiner-Elementsで親指シフト入力に対応するための設定を生成します

```shell
git clone https://github.com/konbu310/karabiner-nicola.git
cd karabiner-nicola
npm install
npm run gen -- --left=spacebar --right=f13 --fileName=nicola.json
mv ./dist/nicola.json ~/.config/karabiner/assets/complex_modifications
```
