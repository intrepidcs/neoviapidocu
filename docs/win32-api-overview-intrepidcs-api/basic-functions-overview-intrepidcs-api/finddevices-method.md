---
sidebar_position: 1
slug: finddevices-method
---
# FindDevices Method

This method returns the neoVI hardware devices connected to the PC.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
int _stdcall icsneoFindDevices(NeoDeviceEx* pNeoDeviceEx, int* pNumDevices ,unsigned int* DeviceTypes,unsigned int numDeviceTypes,POptionsFindNeoEx* pOptionsNeoEx,unsigned int* reserved); 
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Public Declare Function icsneoFindDevices Lib "icsneo40.dll" (ByRef pNeoDevice As NeoDeviceEx, ByRef pNumDevices As Int32, ByRef DeviceTypes As UInt32, ByVal numDeviceTypes As UInt32, ByRef pOptionsFindNeoEx As OptionsNeoEx, ByVal reserved As UInt32) As Int32
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[DllImport("icsneo40.dll")]
public static extern Int32 icsneoFindDevices(ref NeoDeviceEx pNeoDevice, ref Int32 pNumDevices, UInt32 DeviceTypes, UInt32 numDeviceTypes, ref OptionsNeoEx pOptionsNeoEx, UInt32 reserved);
```
</TabItem>
</Tabs>

**Parameters**

_pNeoDeviceEx_ <br />
\[out] This is the address of the first element of an array of [NeoDeviceEx](../structures-types-and-defines-overview-intrepidcs-api/setting-structures-overview-intrepidcs-api/neodeviceex-structure.md) structure. This array can be as big as 255 devices. You must specify the size of the pNeoDeviceEx array in the pNumDevices parameter. The number of devices found will be limited to the value of pNumberofDevices or 255, whichever is lower. Each returned NeoDevice structure will contain information for each device such as its type, device ‘handle’ and serial number.

_pNumberOfDevices_ <br />
\[in/out] In: Specifies the size of the pNeoDevices array. Must be in the range 0 to 255. <br />
Out: Specifies the number of neo devices that were found. This can be in the range 0 to 255.

_DeviceTypes_ <br />
\_\_ \[in] This is an array of device types to look for. Specifies the types of neoVI devices to find. Each element in the array need to have a value for the device type to look for. Currently supported values are:

NEODEVICE_UNKNOWN = 0x00000000<br />
NEODEVICE_BLUE = 0x00000001<br />
NEODEVICE_ECU_AVB = 0x00000002<br />
NEODEVICE_RADSUPERMOON = 0x00000003<br />
NEODEVICE_DW_VCAN = 0x00000004<br />
NEODEVICE_RADMOON2 = 0x00000005<br />
NEODEVICE_RADGIGALOG = 0x00000006<br />
NEODEVICE_VCAN41 = 0x00000007<br />
NEODEVICE_FIRE = 0x00000008<br />
NEODEVICE_RADPLUTO = 0x00000009
NEODEVICE_VCAN42_EL = 0x0000000a<br />
NEODEVICE_RADIO_CANHUB = 0x0000000b<br />
NEODEVICE_NEOECU12 = 0x0000000c<br />
NEODEVICE_OBD2_LCBADGE = 0x0000000d<br />
NEODEVICE_RAD_MOON_DUO = 0x0000000e<br />
NEODEVICE_VCAN3 = 0x00000010<br />
NEODEVICE_RADJUPITER = 0x00000011<br />
NEODEVICE_VCAN4_IND = 0x00000012<br />
NEODEVICE_GIGASTAR = 0x00000013<br />
NEODEVICE_ECU22 = 0x00000015<br />
NEODEVICE_RED = 0x00000040<br />
NEODEVICE_ECU = 0x00000080<br />
NEODEVICE_IEVB = 0x00000100<br />
NEODEVICE_PENDANT = 0x00000200<br />
NEODEVICE_OBD2_PRO = 0x00000400<br />
NEODEVICE_PLASMA = 0x00001000<br />
NEODEVICE_NEOANALOG = 0x00004000<br />
NEODEVICE_CT_OBD = 0x00008000<br />
NEODEVICE_ION = 0x00040000<br />
NEODEVICE_RADSTAR = 0x00080000<br />
NEODEVICE_VCAN44 = 0x00200000<br />
NEODEVICE_VCAN42 = 0x00400000<br />
NEODEVICE_CMPROBE = 0x00800000<br />
NEODEVICE_EEVB = 0x01000000<br />
NEODEVICE_VCANRF = 0x02000000<br />
NEODEVICE_FIRE2 = 0x04000000<br />
NEODEVICE_FLEX = 0x08000000<br />
NEODEVICE_RADGALAXY = 0x10000000<br />
NEODEVICE_RADSTAR2 = 0x20000000<br />
NEODEVICE_VIVIDCAN = 0x40000000<br />
NEODEVICE_OBD2_SIM = 0x80000000<br />
NEODEVICE_ALL = = 0xFFFFBFFF<br />

Constants are defined in appropriate header or module. pNumDevicTypes

\[in] In: Specifies the size of the DeviceTypes array. Must be in the range 0 to 255.

_pOptionsNeoEx_

\[in] CAN netowork ID for connecting to devices over CAN. Set to null for USB or Ethernet connections.

**Return Values**

1 if the function succeeded. 0 if it failed for any reason. If the function succeeds but no devices are found 1 will still be returned and pNumberOfDevices will equal 0.

**Remarks**

The NeoDevice array elements that are returned with this function may be passed to [OpenNeoDevice ](openneodevice-method-intrepidcs-api.md)so that individual neoVI devices can be opened.

### Examples

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
NeoDeviceEx Devices[255];
unsigned long lDevTypes;
int iNumDevices = 255;
int iRetVal = 0;
int lDevTypes;

lDevTypes = NEODEVICE_ALL;

iRetVal = icsneoFindDevices(Devices, &iNumberOfDevices,NULL,0,NULL,0);
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
int iResult;//Holds the results from function call
NeoDeviceEx ndNeoToOpen = new NeoDeviceEx(); ; //Struct holding detected hardware information
int iNumberOfDevices; //Number of hardware devices to look for
int lDevTypes; //Holds the device types to look for
lDevTypes = NEODEVICE_ALL;

//Set the number of devices to find
iNumberOfDevices = 1;
//Search for connected hardware
iResult = icsNeoDll.icsneoFindDevices(ref ndNeoToOpenex[0],ref iNumberOfDevices, 0, 0,ref neoDeviceOption, 0);
if (iResult == 0)
{
    MessageBox.Show("Problem finding devices");
    return;
}
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Dim iResult As Integer '//Holds the results from function call
Dim ndNeoToOpenex As NeoDeviceEx '//Struct holding detected hardware information
Dim iNumberOfDevices As Integer '//Number of hardware devices to look for
Dim lDevTypes As Integer '//Holds the device types to look for
Dim neoDeviceOption As OptionsNeoEx = New OptionsNeoEx '//Not using CAN 0 out


'//Set the devices to look for
lDevTypes = NEODEVICE_ALL
'//Set the number of devices to find
iNumberOfDevices = 1
'//Search for connected hardware
iResult = icsneoFindDevices(ndNeoToOpenex(0), iNumberOfDevices, 0, 0, neoDeviceOption, 0)
If (iResult = 0) Then MsgBox("Problem finding devices")
```
</TabItem>
</Tabs>