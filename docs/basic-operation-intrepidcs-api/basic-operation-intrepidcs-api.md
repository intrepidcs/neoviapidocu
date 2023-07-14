---
sidebar_position: 1
id: basic-operation-intrepidcs-api
---

# Basic Operation - neoVI API

1. Start the application.
2. Open the driver and find a neoVI or ValueCAN device.
3. Create the neoVI object using the [OpenNeoDevice ](../win32-api-overview-intrepidcs-api/basic-functions-overview-intrepidcs-api/openneodevice-method-intrepidcs-api)method.
4. Transmit messages using the [TxMessages](/message-functions-overview-intrepidcs-api/txmessages-method-intrepidcs-api) method.
5. Read messages on the network using the [GetMessages](/message-functions-overview-intrepidcs-api/getmessages-method-intrepidcs-api) method.
6. Optionally readout any errors using the GetErrorMessages method.
7. Repeat steps 3 through 5 while your application is monitoring the network.
8. Close the driver when not monitoring by calling the [ClosePort ](../win32-api-overview-intrepidcs-api/basic-functions-overview-intrepidcs-api/closeport-method-intrepidcs-api.md)method.
9. To start monitoring again go back to step 2.
10. When the application exits the neoVI object must freed (destroyed) by calling the [FreeObject ](../win32-api-overview-intrepidcs-api/basic-functions-overview-intrepidcs-api/freeobject-method-intrepidcs-api.md)method.
