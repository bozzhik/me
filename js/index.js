const resume = document.getElementById('resume')
const portfolio = document.getElementById('portfolio')
const github = document.getElementById('github')
const telegram = document.getElementById('telegram')
const instagram = document.getElementById('instagram')
const email = document.getElementById('email')

const resumeText = resume.innerHTML
const portfolioText = portfolio.innerHTML
const githubText = github.innerHTML
const telegramText = telegram.innerHTML
const instagramText = instagram.innerHTML
const emailText = email.innerHTML

function textAction() {
   email.addEventListener('mouseover', () => {
      email.innerHTML = 'COPY EMAIL?'
   })
   email.addEventListener('click', () => {
      navigator.clipboard.writeText(emailText).then(
         () => {
            email.innerHTML = 'EMAIL COPIED!'
         },
         () => {
            email.innerHTML = 'ERROR COPY IT YOURSELF'
         }
      )
   })
   email.addEventListener('mouseout', () => {
      email.innerHTML = emailText
   })
}

textAction()
