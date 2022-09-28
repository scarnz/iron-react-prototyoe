



To Get Going:

Install Node

Install yarn per step one here:
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-the-yarn-package-manager-for-node-

Run Yarn:
yarn run dev

Run and host:
yarn run dev --host

Production: (Don't need to do this yet)
yarn run build



Compile #Tailwind
Make sure you have tailwindcss-cli installed

npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css --watch

or 

npx tailwindcss-cli -i ./src/css/input.css -o ./src/css/output.css --watch

