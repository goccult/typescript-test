const require = (path: string) => {
  const script = document.createElement('script')
  script.src = path
  document.body.appendChild(script)
}