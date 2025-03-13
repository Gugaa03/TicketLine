param (
    [string]$Language
)

function Show-Menu {
    param (
        [string]$Title,
        [string[]]$Options
    )
    
    $selectedIndex = 0
    $key = $null
    
    while ($key -ne 13) {
        Clear-Host
        Write-Host "$Title`n"
        
        for ($i = 0; $i -lt $Options.Length; $i++) {
            if ($i -eq $selectedIndex) {
                Write-Host "> $($Options[$i])" -ForegroundColor Cyan
            } else {
                Write-Host "  $($Options[$i])"
            }
        }
        
        $key = $host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown').VirtualKeyCode
        switch ($key) {
            38 { $selectedIndex = if ($selectedIndex -gt 0) { $selectedIndex - 1 } else { $Options.Length - 1 } } # Up arrow
            40 { $selectedIndex = if ($selectedIndex -lt ($Options.Length - 1)) { $selectedIndex + 1 } else { 0 } } # Down arrow
        }
    }
    
    return $Options[$selectedIndex]
}

# Step 1: Read Configuration from JSON file and download file
$configFilePath = "config.json"

try {
    $config = Get-Content -Path $configFilePath | ConvertFrom-Json
    $swaggerUrl = $config.swaggerUrl
    $swaggerFile = $config.swaggerFile

    Invoke-WebRequest -Uri $swaggerUrl -OutFile $swaggerFile
    Write-Host "Swagger JSON downloaded successfully to $swaggerFile"
} catch {
    Write-Error "Failed to download Swagger JSON from $swaggerUrl"
    Write-Error $_.Exception.Message
}

# Step 2: Select language for client code generation
if ($Language -eq "CSharp" -or $Language -eq "TypeScript" -or $Language -eq "JavaScript") {
    $selectedLanguage = $Language
} else {
    $options = @("CSharp", "TypeScript", "JavaScript")
    $selectedLanguage = Show-Menu -Title "Select the language for client code generation:" -Options $options
}

if ($selectedLanguage -eq "CSharp") {
    # Generate C# Client Code
    Write-Host "Generating C# client code..."
    autorest --input-file=$swaggerFile --csharp --output-folder=GeneratedClientCS
    Write-Host "C# client code generated in GeneratedClientCS"
} elseif ($selectedLanguage -eq "TypeScript") {
    # Generate TypeScript Client Code
    Write-Host "Generating TypeScript client code..."
    autorest --input-file=$swaggerFile --typescript --azure-sdk-for-js=false --output-folder=GeneratedClientTS1
    Write-Host "TypeScript client code generated in GeneratedClientTS"
} elseif ($selectedLanguage -eq "JavaScript") {
    # Generate JavaScript Client Code
    Write-Host "Generating JavaScript client code..."
    autorest --input-file=$swaggerFile --javascript --output-folder=GeneratedClientJS
    Write-Host "JavaScript client code generated in GeneratedClientJS"
} else {
    Write-Host "Invalid language option. Please specify 'CSharp', 'TypeScript', or 'JavaScript'."
}

# Usage Instructions
Write-Host "`nUsage:"
Write-Host "powershell -File generate-client.ps1 -Language <CSharp|TypeScript|JavaScript>"
