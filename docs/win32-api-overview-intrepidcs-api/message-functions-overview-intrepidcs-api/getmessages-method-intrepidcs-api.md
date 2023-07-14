---
sidebar_position: 1
slug: /message-functions-overview-intrepidcs-api/getmessages-method-intrepidcs-api
---

# GetMessages Method - intrepidcs API

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
int _stdcall icsneoGetMessages(void * hObject, icsSpyMessage *pMsg, int *pNumberOfMessages, int *pNumberOfErrors);
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Public Declare Function icsneoGetMessages Lib “icsneo40.dll” (ByVal hObject As IntPtr, ByRef pMsg As icsSpyMessage, ByRef pNumberOfMessages As Int32, ByRef pNumberOfErrors As Int32) As Int32
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```cs
[DllImport(“icsneo40.dll”)] public static extern Int32 icsneoGetMessages(IntPtr hObject, ref icsSpyMessage pMsg, ref Int32 pNumberOfMessages, ref Int32 pNumberOfErrors);
```
</TabItem>
</Tabs>

**Parameters**

hObject

\[in] Specifies the driver object created by [OpenNeoDevice](../basic-functions-overview-intrepidcs-api/openneodevice-method-intrepidcs-api.md).

pMsg

\[out] This is the address of the first element of an array of[ icsSpyMessage](../structures-types-and-defines-overview-intrepidcs-api/setting-structures-overview-intrepidcs-api/message-structures-neovi-api.md) structures. This array will be loaded with messages received by the hardware. This array must be sized to fit 20,000 [icsSpyMessage](../structures-types-and-defines-overview-intrepidcs-api/setting-structures-overview-intrepidcs-api/message-structures-neovi-api.md) structures.

pNumberOfMessages

\[out] Specifies the number of messages the driver has loaded in the pMsg array. This number can be up to 20,000 messages.

pNumberOfErrors

\[out] Specifies the number of errors in the neoVI DLL error queue. Errors are obtained using [GetErrorMessages](../error-functions-overview-intrepidcs-api/geterrormessages-method-intrepidcs-api.md).

**Return Values**

Returns 1 if successful, 0 if an error occurred. [GetLastAPIError](../error-functions-overview-intrepidcs-api/getlastapierror-method-intrepidcs-api.md) must be called to obtain the specific error. This function will return 1 even if no messages were received, provided there are no errors. The errors that can be generated by this function are:

NEOVI_ERROR_DLL_NEOVI_NO_RESPONSE = 75

**Remarks**

The driver object will hold 20,000 received messages before it will generate an rx buffer overflow error (indicated by a [NEOVI_ERROR_DLL_RX_MSG_BUFFER_OVERFLOW](../error-functions-overview-intrepidcs-api/geterrormessages-method-intrepidcs-api.md) error message in the error queue). It is the job of the application software to read this buffer at regular intervals. The rate that the application needs to read these messages is dependant on the rate messages are received on the bus. For example, a high bandwidth CAN bus can generate 5000 messages per second. In this case you must read out the messages at least every four seconds or overflow errors will result.

### Examples

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
void * hObject = 0;                 // holds a handle to the neoVI object
icsSpyMessage stMessages[20000]; // holds the received messages
int iResult;
int iNumberOfErrors;
int iNumberOfMessages;

// read out the messages
iResult = icsneoGetMessages(hObject,stMessages,&iNumberOfMessages,&iNumberOfErrors);
if (iResult == 0)
    MessageBox(hWnd,TEXT("Problem Reading Messages"),TEXT("neoVI Example"),0);
else
    MessageBox(hWnd, TEXT("Messages Read Successfully"),TEXT("neoVI Example"),0);
```

</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">


```vbnet
Dim lResult As Long ''Storage for Result of Call
Dim iNumberOfErrors As Long ''Storage for number of errors
Dim lNumberOfMessages As Long ''Storage for number of messages
Dim stMessages(20000) As icsSpyMessage '// Array of message structures to hold the received data

lResult = icsneoGetMessages(m_hObject, stMessages(0), lNumberOfMessages, iNumberOfErrors) ''Call get message function
If Not CBool(lResult) Then ''See if Call was successful
    MsgBox("Problem Getting Messages")
    Exit Sub
End If
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
long lResult; //Storage the Result for the function call
int lNumberOfErrors = 0; //Storage for the number of Errors
int lNumberOfMessages = 0; //Storage for the number of messages

//Call Get messages
lResult = icsNeoDll.icsneoGetMessages(m_hObject, ref stMessages[0],ref lNumberOfMessages,ref lNumberOfErrors);
if(lResult == 0) //Check the Results to see if there is a problem
{
    MessageBox.Show ("Problem Getting Messages");
    return;
}
```

</TabItem>
</Tabs>