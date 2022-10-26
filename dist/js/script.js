// mobile nav
const openBtn = document.querySelector('.mobile-nav')
const nav = document.querySelector('.hero__nav')
const loginBtn = document.querySelector('.hero__nav .btn-primary')
const overlay = document.querySelector('.nav__list')
const links =  document.querySelectorAll('.hero__nav a')
// features switch
const img = document.querySelector('.features__img')
const title = document.querySelector('.features__title') 
const desc =  document.querySelector('.features__desc') 
const simple =  document.querySelector('.simple') 
const search =  document.querySelector('.search') 
const share =  document.querySelector('.share') 
// features accordion
const accordion =  document.querySelectorAll('.faq__question-wrapper') 
const answer = document.querySelectorAll('.faq__answer-wrapper') 

// features switch 
simple.addEventListener('click', e => {
	e.preventDefault()
	simple.classList.add('current')
	search.classList.remove('current')
	share.classList.remove('current')
	img.setAttribute('src','images/illustration-features-tab-1.svg')
	title.textContent = " Bookmark in one click"
	desc.textContent = " Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites. "

})
search.addEventListener('click', e => {
	e.preventDefault()
	simple.classList.remove('current')
	search.classList.add('current')
	share.classList.remove('current')
	img.setAttribute('src','images/illustration-features-tab-2.svg')
	title.textContent = " Intelligent search "
	desc.textContent = " Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks. "
})
share.addEventListener('click', e => {
	e.preventDefault()
	simple.classList.remove('current')
	search.classList.remove('current')
	share.classList.add('current')
	img.setAttribute('src','images/illustration-features-tab-3.svg')
	title.textContent = " Share your bookmarks "
	desc.textContent = " Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button. "
})

// features accordion
accordion.forEach(item => {
	item.addEventListener('click', () => {
		item.classList.toggle('active')
	})
})

// mobile nav
let isOpen = false

openBtn.addEventListener('click', () => {
	isOpen = !isOpen 
	if (isOpen) {
		openBtn.classList.add('open')
		overlay.classList.remove("hidden")
		nav.classList.add('sticky')
		loginBtn.classList.remove('btn-primary')
	} else {
		openBtn.classList.remove('open')
		overlay.classList.add("hidden")
		nav.classList.remove('sticky')
		loginBtn.classList.add('btn-primary')

	}
})

// links
links.forEach(link => {
	link.addEventListener('click', () => {
		isOpen = false 
		openBtn.classList.remove('open')
		overlay.classList.add("hidden")
		nav.classList.remove('sticky')
		loginBtn.classList.add('btn-primary')
	})
})
