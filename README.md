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

## Using Docker & GCP

```bash
# Connect to GCP account via terminal
gcloud auth login

# If error when using terraform apply command line use :
gcloud auth application-default login  
```

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
terraform apply 
# OR terraform -var-file [NAME OF YOUR FILE].tfvars
```

Add a terraform file to create a backend file in a bucket storage

[Documentation](https://cloud.google.com/docs/terraform/resource-management/store-state?hl=fr)