[CmdletBinding()]
param()

$ErrorActionPreference = "Stop"
$challengeRoot = $PSScriptRoot
$validationRoot = Join-Path $challengeRoot "validation"

Write-Host "[1/3] Regenerating the browser payload from canonical Markdown..."
& node (Join-Path $validationRoot "generate-payloads.mjs")
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "[2/3] Regenerating the current 118-route re-audit..."
& node (Join-Path $validationRoot "generate-current-reaudit.mjs")
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "[3/3] Running the complete curriculum harness..."
& node (Join-Path $validationRoot "validate-all.mjs")
exit $LASTEXITCODE
