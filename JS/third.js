const main = document.getElementById('main-container')
const section=document.createElement('section');
section.innerHTML = `
    <h1>my dynamic section</h1>
    <P>Extra text added inside paragraph</P>
    <ul>
        <li>First item</li>
        <li>First item</li>
        <li>First item</li>
        <li>First item</li>
    </ul>
`
main.appendChild(section);