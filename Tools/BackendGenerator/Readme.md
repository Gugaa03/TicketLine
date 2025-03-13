# How it works

The generator uses swagger doc to auto create the connection from backend to other Apps. It can perform, at the moment, conversions to Typescript and Csharp and it uses autorest cli to do it.

# Setup

* Install autorest cli

> npm install -g autorest

# Run

We can run both ways, either by running the script manually or by running it whit args (for later CD/CI if needed)

To run manually just run "generator.ps1" powershell file

To run with args follow these examples

* Csharp

> .\generator.ps1 -Language CSharp

* Typescript

> .\generator.ps1 -Language TypeScript