---
sidebar_position: 4 
slug: freeobject-method-intrepidcs-api
---

# FreeObject Method - IntrepidCS API

This method releases system resources used by the neoVI device.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
void _stdcall icsneoFreeObject(void * hObject);
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Public Declare Function icsneoFreeObject Lib “icsneo40.dll” (ByVal hObject As IntPtr)
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[DllImport(“icsneo40.dll”)] public static extern void icsneoFreeObject(IntPtr hObject);
```
</TabItem>
</Tabs>


**Parameters**

hObject

\*\*\*\* \[in] Specifies the driver object created by [OpenNeoDevice](openneodevice-method-intrepidcs-api.md).

**Return Values**

None.

**Remarks**

This method is used to release any resources that were allocated by [OpenNeoDevice](openneodevice-method-intrepidcs-api.md). Applications that create neoVI handles should release them using this method, however, the intrepidCS API will release any resources that it created for the client application when the client application ends and the API is unloaded. The LabVIEW neoClosePort.vi will call the FreeObject API.

### Examples

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
icsneoFreeObject(hObject);  //Free the memory associated with our driver object
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
icsNeoDll.icsneoFreeObject(m_hObject); //Free the memory associated with our driver object
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Call icsneoFreeObject(m_hObject)   '//Free the memory associated with our driver object
```
</TabItem>
</Tabs>