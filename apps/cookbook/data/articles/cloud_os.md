---
subject: pagwe cloud os
---

# Pagwe cloud os

Pagwe was designed from the outset as a network operating system. This means that it decouples programs from their runtime environments. The runtime environment for a piece of code is dynamic, which means it might run on one server this time and on another server the next time.

Simply decoupling computation from the runtime environment isn't enough. This decoupling introduces new challenges, such as how to save state, protect sensitive information, and overcome network latency.

To address these needs and challenges, Pagwe developed the Wallaby programming language. Wallaby serves as an interface to provide features that meet these requirements and solve these problems.

Pagwe Cloud OS is the culmination of years of design, bringing together the aesthetics of programming languages and network service features.

Pagwe Cluster is a combination of servers, with two main services running within it:

  - Admin Service: Its primary role is to create projects, import GitHub repositories, and perform online debugging of project code. It is used for project management.

  - Worker Services: Comprising a group of servers, these services can dynamically add or remove servers to accommodate the number of HTTP requests. This includes a load balancer and a set of Worker instances. Workers are responsible for handling HTTP requests and running the corresponding Wallaby programs to process these requests.