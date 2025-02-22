<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>




<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->




<!-- PROJECT LOGO -->
<br />
<div align="center">

<h1 align="center">LooLooLoo</h1>

  <p align="center">
Water Water Water, Loo Loo Loo! 

LooLooLoo is an indoor mapping web app that directs you to the nearest washroom when you drink from a water fountain.     <br />
    <a href="https://www.youtube.com/watch?v=z4kfvKR1sek" target="_blank"><strong>View Demo »</strong></a>
    <br />
  </p>
</div>




<img src=public/loo.png/>


<!-- ABOUT THE PROJECT -->
## About The Project
<h3>  How it works
</h3>
<p>
We installed ESP32 microcontrollers beside water fountains in the engineering building. Once a user signs up on LooLooLoo by providing us with their phone number and bluetooth ID, they are ready to go! When a user drinks from a fountain, the ESP32 detects their phone's Bluetooth signal and sends a POST request to our Express.js backend. This triggers an SMS via the Twilio REST API with a custom link to the LooLooLoo web app, which features an interactive 3D map guiding the user from their current location to the nearest washroom in the building. LooLooLoo also features a daily water tracker that incentives you to stay hydrated. 

</p>


### Built With

* [![React][React.js]][React-url]
* [![Node.js][Node.js]][Node-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![Docker][Docker]][Docker-url]
* [![ESP32][ESP32]][ESP32-url]
* [![YAML][YAML]][YAML-url]
* [![Twilio API][Twilio-API]][Twilio-API-url]





<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- CONTACT -->
## Contact

Gordon Zhang - g234zhan@uwaterloo.ca

Project Link: [https://github.com/gordonzhang1/LooLooLoo1](https://github.com/gordonzhang1/LooLooLoo1)

<p align="right">(<a href="#readme-top">back to top</a>)</p>






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/gordonzhang1/ShakespeareAI.svg?style=for-the-badge
[contributors-url]: https://github.com/gordonzhang1/ShakespeareAI/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/gordonzhang1/ShakespeareAI.svg?style=for-the-badge
[forks-url]: https://github.com/gordonzhang1/ShakespeareAI/network/members
[stars-shield]: https://img.shields.io/github/stars/gordonzhang1/ShakespeareAI.svg?style=for-the-badge
[stars-url]: https://github.com/gordonzhang1/ShakespeareAI/stargazers
[issues-shield]: https://img.shields.io/github/issues/gordonzhang1/ShakespeareAI.svg?style=for-the-badge
[issues-url]: https://github.com/gordonzhang1/ShakespeareAI/issues
[license-shield]: https://img.shields.io/github/license/gordonzhang1/ShakespeareAI.svg?style=for-the-badge
[license-url]: https://github.com/gordonzhang1/ShakespeareAI/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/gordonzhang1
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/


[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Docker]: https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[ESP32]: https://img.shields.io/badge/ESP32-525DDC?style=for-the-badge&logo=esphome&logoColor=white
[ESP32-url]: https://www.espressif.com/en/products/socs/esp32
[Twilio-API]: https://img.shields.io/badge/Twilio%20API-F22F46?style=for-the-badge&logo=twilio&logoColor=white
[Twilio-API-url]: https://www.twilio.com/
[YAML]: https://img.shields.io/badge/YAML-ff6600?style=for-the-badge&logo=yaml&logoColor=white
[YAML-url]: https://yaml.org/


