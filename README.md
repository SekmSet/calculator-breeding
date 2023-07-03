This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Using Docker & GCP

```bash
docker build -f [PATH TO YOUR DOCKERFILE] -t eu.gcr.io/[ID PROJECT]/[NAME]:[TAG] .
```

```bash
docker push eu.gcr.io/[ID PROJECT]/[NAME]:[TAG]
```
NB  
- **:[TAG]** is optionnal by default the tag will be **latest**


## Using Terraform

Create a new file in **terraform** folder to define value for your variables

```
[NAME OF YOUR FILE].tfvars
```

Or add default value to your variable in the **variable.tf** file as follow

```terraform
variable "port" {
  type = number
  description = "Using PORT Ex: 8000"
  default = 3000   
}
```

```bash
terraform init
```

```bash
terraform plan
```

```bash
terraform apply # OR terraform -var-file [NAME OF YOUR FILE].tfvars```
```

Add a terraform file to create a backend file in a bucket storage

[Documentation](https://cloud.google.com/docs/terraform/resource-management/store-state?hl=fr)