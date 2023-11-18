---
subject: Project debugging
---
# Project debugging

The Admin Web Portal includes a powerful debugger that helps you quickly identify bugs and accelerate your development process. You can set breakpoints, inspect variable values, step through code, or run to the next breakpoint. When an error occurs, the debugger provides detailed information to assist you in identifying the issue. During program execution, the debugger also prints useful information to help you understand the program's runtime behavior. This debugger is a valuable tool for troubleshooting and optimizing your code while developing on the platform.

  ![debug button](/cookbook/public/images/github_debug_button.jpg)

  ![debug details](/cookbook/public/images/debugger_details.jpg)

  1. The program is paused at the `pause line`.
  2. This is a breakpoint set by the developer.
  3. Each http request is intercepted and paused by the debugger with a debugging session. You can click the link to swith between the debugging sessions.
  4. You can click the `variable viewer` button to check the variables values.
  5. You can click the `breakpoints viewer` button to list and remove the breakpoints.
  6. Click the `stop next` button to execute the program to the next line of program code.
  7. Click the `run to next` button to run the program to the next breakpoint.
  8. Click the `close debugger` button to close all open debugger sessions.
  9. Click the `clean cache files` button to clean the cached files of the current project.
 
