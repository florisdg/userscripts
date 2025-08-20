# Userscripts
Repo containing userscripts for the Tampermonkey browser extension.


## What is Tampermonkey?
[Tampermonkey](https://www.tampermonkey.net/)  allows its users to customize and enhance the functionality of your favorite web pages. Userscripts are small JavaScript programs that can be used to add new features or modify existing ones on web pages. With Tampermonkey, you can easily create, manage, and run these userscripts on any website you visit.

For example, with Tampermonkey, you could add a new button to a web page that lets you quickly share a link on social media, or to automatically fill in a form with your personal information. This is especially useful in the age of digitization, where web pages are often used as user interfaces for accessing a wide range of services and applications.

Additionally, Tampermonkey makes it easy to find and install userscripts created by other users. This means that you can quickly and easily access a vast library of customizations and enhancements for your favorite web pages, without having to spend hours writing your own code.

Whether you're a web developer looking to add new features to your site, or just a regular user looking to improve your online experience, Tampermonkey is a great tool to have in your toolkit.

### B-b-but Tampermonkey is closed-source!!!1!
Tampermonkey started as open source (around 2010–2011) but later the author, Jan Biniok, closed the code.  
The main reasons (from his statements on GitHub issues, forum posts, and interviews) are:

#### Extension store abuse / clones
When it was open source, multiple people copied the code, renamed it, and re-uploaded it to the Chrome Web Store and other extension stores. 
Some clones contained malware/adware, tricking users and damaging Tampermonkey’s reputation.

#### Maintenance burden
Open sourcing meant dealing with forks, bug reports for clone versions, and confusion over which “Tampermonkey” was the real one.

#### Revenue / sustainability
Tampermonkey is free, but the closed-source model allows him to maintain a “freemium” license (the stable version is free, the Beta with extra features has a paid option on some platforms).
Keeping the code closed gives the author control over monetization without third parties repackaging it.

#### Security control
By keeping it closed, the author ensures that the official releases are the only ones trusted. Since userscripts execute arbitrary JavaScript, malicious forks could do serious damage.
