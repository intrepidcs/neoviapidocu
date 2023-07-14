---
sidebar_position: 3
slug: closeport-method-intrepidcs-api
---

# ClosePort Method - IntrepidCS API

This method closes the communication link with the neoVI hardware.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
int _stdcall icsneoClosePort(void * hObject, int * pNumberOfErrors);
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Public Declare Function icsneoClosePort Lib “icsneo40.dll” (ByVal hObject As IntPtr, ByRef pNumberOfErrors As Int32) As Int32
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[DllImport(“icsneo40.dll”)] public static extern Int32 icsneoClosePort(IntPtr hObject, ref Int32 pNumberOfErrors);
```
</TabItem>
</Tabs>

**Parameters**

hObject

\[in] Specifies the driver object created by [OpenNeoDevice](openneodevice-method-intrepidcs-api.md).

pNumberOfErrors

\[out] Specifies the number of errors in the neoVI DLL error queue. You can read out the errors by calling the [GetErrorMessages](../error-functions-overview-intrepidcs-api/geterrormessages-method-intrepidcs-api.md) method.

**Return Values**

If the port has been closed successfully the return value will be 1. Otherwise, it will return zero. It will also return zero if the port is already closed.

**Remarks**

Must be called once for each successful call to [OpenNeoDevice](openneodevice-method-intrepidcs-api.md) or memory and resource leaks will occur.

### Examples

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
int lNumberOfErrors;    // used to get the number of errors
int iResult;

// Close Communication
iResult = icsneoClosePort(hObject, &iNumberOfErrors);
// Test the Result
if (iResult== 0)
    MessageBox(hWnd,TEXT("Problem Closing Port"),TEXT("neoVI Example"),0);
else
    MessageBox(hWnd,TEXT("Port Closed Successfully"),TEXT("neoVI Example"),0);
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
//Declared at form level and previously open with a call to OpenNeoDevice
IntPtr m_hObject; //handle for device,

int iResult;
int iNumberOfErrors = 0;

//close the port
iResult = icsNeoDll.icsneoClosePort(m_hObject, ref iNumberOfErrors);
if (iResult == 1)
{
    MessageBox.Show("Port Closed OK!");
}
else
{
    MessageBox.Show("Problem ClosingPort");
}
m_bPortOpen = false;

```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Private m_hObject As IntPtr '// Declared at form level and previously open with a call to OpenNeoDevice

Dim iResult As Integer
Dim iNumberOfErrors As Integer

'//close the port
iResult = icsneoClosePort(m_hObject, iNumberOfErrors)
If CBool(iResult) Then
    MsgBox("Port Closed OK!")
Else
    MsgBox("Problem Closing Port")
End If
```
</TabItem>
</Tabs>