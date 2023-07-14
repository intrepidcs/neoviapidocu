---
sidebar_position: 2
slug: /message-functions-overview-intrepidcs-api/txmessages-method-intrepidcs-api
---

# TxMessages Method - intrepidcs API

This method transmits messages asynchronously to vehicle networks using the neoVI hardware.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
int _stdcall icsneoTxMessages(void * hObject, icsSpyMessage *pMsg, int lNetworkID, int lNumMessages);c+
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Public Declare Function icsneoTxMessages Lib “icsneo40.dll” (ByVal hObject As IntPtr, ByRef pMsg As icsSpyMessage, ByVal lNetworkID As Int32, ByVal lNumMessages As Int32) As Int32
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[DllImport(“icsneo40.dll”)] public static extern Int32 icsneoTxMessages(IntPtr hObject, ref icsSpyMessage pMsg, Int32 lNetworkID, Int32 lNumMessages);
```
</TabItem>
</Tabs>

**Parameters**

hObject

\[in] Handle which specifies the driver object created by [OpenNeoDevice](../basic-functions-overview-intrepidcs-api/openneodevice-method-intrepidcs-api.md).

pMsg

\[in] This is the address of the first element of an array of [icsSpyMessage](../structures-types-and-defines-overview-intrepidcs-api/setting-structures-overview-intrepidcs-api/message-structures-neovi-api.md) structures. This array will be loaded by the application software with messages that are to be transmitted by the hardware.

lNetworkID

\[in] Specifies the network to transmit the message on. See [NetworkIDList ](../structures-types-and-defines-overview-intrepidcs-api/setting-structures-overview-intrepidcs-api/neovi-network-id-list.md)List for a list of valid Network ID values. Network support varies by neoVI device. NETID\_DEVICE transmits on to the neoVI Device Virtual Network (see users manual).

lNumMessages

\[in] Specifies the number of messages to be transmitted. This parameter should always be set to one unless you are transmitting a long Message. Transmitting long messages on ISO or J1708 is described in a [different topic](transmitting-long-messages-intrepidcs-api.md).

**Return Values**

Returns 1 if successful, 0 if an error occurred. [GetLastAPIError](../error-functions-overview-intrepidcs-api/getlastapierror-method-intrepidcs-api.md) must be called to obtain the specific error. The errors that can be generated by this function are:

NEOVI\_ERROR\_DLL\_ISOTX\_DATA\_BUFFER\_ALLOC = 13 <br/>
NEOVI\_ERROR\_DLL\_NEOVI\_NO\_RESPONSE = 75 <br/>
NEOVI\_ERROR\_DLL\_ILLEGAL\_TX\_NETWORK= 90 <br/>
NEOVI\_ERROR\_DLL\_3G\_DEVICE\_LICENSE\_NEEDS\_TO\_BE\_UPGRADED = 190 <br/>

**Remarks**

This function call adds a transmit message to the transmit queue. The message will be transmitted when the network is free and all previously transmitted messages have been transmitted. Transmitting long messages which are greater than 12 bytes on ISO or J1708 is described in a [different topic](transmitting-long-messages-intrepidcs-api.md).

**Transmit Report**

After the messages has been transmitted there will be a transmit report message returned from the device. The transmit report will be read out with [GetMessages](getmessages-method-intrepidcs-api.md). Any message read which has the SPY\_STATUS\_TX\_MSG (icsSpyStatusTx) bit set in the [status bitfield](../structures-types-and-defines-overview-intrepidcs-api/setting-structures-overview-intrepidcs-api/status-bitfields-neovi-api.md) is a transmit report.

You can also identify a particular transmitted message with DescriptionID field. This two byte field (only 14 bits are used) allows the programmer to assign an arbitrary number to a message. This number is then returned in the transmit report.

The transmit report does not necessarily mean the message was transmitted successfully. For example, the Ford SCP network will return a Transmit Report if it had tried to send a message. Therefore, the programmer should always check the GlobalError Flag in the [status bitfield](../structures-types-and-defines-overview-intrepidcs-api/setting-structures-overview-intrepidcs-api/status-bitfields-neovi-api.md).

To transmit different messages, set the appropriate bits in the [status bitfields](../structures-types-and-defines-overview-intrepidcs-api/setting-structures-overview-intrepidcs-api/status-bitfields-neovi-api.md). For example, there are bits for init waveforms, extended identifiers and remote frames.

### **Examples**

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
void * hObject = 0; // holds a handle to the neoVI object


icsSpyMessage stMsg;
int iResult;

// Load the message to be transmitted ArbID = FF standard data 0x22 0x52 0x12 0x28
stMsg.ArbIDOrHeader = 0xFF;
stMsg.NumberBytesData = 4;
stMsg.Data[0] = 0x22;
stMsg.Data[1] = 0x52;
stMsg.Data[2] = 0x12;
stMsg.Data[3] = 0x28;

// Status Bitfield standard ID no remote frame
stMsg.StatusBitField = 0;
stMsg.StatusBitField2 = 0;


// Transmit the message on high speed can
iResult = icsneoTxMessages(hObject,&stMsg,NETID_HSCAN,1);
if (iResult == 0)
    MessageBox(hWnd,TEXT("Problem Transmitting Messages"),TEXT("neoVI Example"),0);
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Dim lResult As Long
Dim stMessagesTx As icsSpyMessage
Dim lNumberBytes As Long
Dim sDataArray(7) As String

sDataArray(0) = txtDataByte1.Text ''Put data from form in
sDataArray(1) = txtDataByte2.Text ''form of Array
sDataArray(2) = txtDataByte3.Text
sDataArray(3) = txtDataByte4.Text

stMessagesTx.ArbIDOrHeader = Val("&H" & txtArbID.Text) ''Set ArbID in structur

stMessagesTx.NumberBytesData = 4 ''Set the number of Data bytes

stMessagesTx.Data1 = Val("&H" & sDataArray(0)) ''Set data bytes in structure
stMessagesTx.Data2 = Val("&H" & sDataArray(1))
stMessagesTx.Data3 = Val("&H" & sDataArray(2))
stMessagesTx.Data4 = Val("&H" & sDataArray(3))

lResult = icsneoTxMessages(m_hObject, stMessagesTx, 1, 1) ''Send message
If Not CBool(lResult) Then ''Check the status of sent message
    MsgBox("Problem Transmitting Message")
End If
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
int iResult; //Storage for the Result from function call
icsSpyMessage stMessagesTx = new icsSpyMessage(); //Storage for TXMessage


//Set the ArbID information for TX message
stMessagesTx.ArbIDOrHeader = ConvertFromHex(txtArbID.Text);

//Set the number of Data Bytes and set the Data Bytes values
stMessagesTx.NumberBytesData = Convert.ToByte(4);
stMessagesTx.Data1=Convert.ToByte(ConvertFromHex(txtDataByte1.Text));
stMessagesTx.Data2=Convert.ToByte(ConvertFromHex(txtDataByte2.Text));
stMessagesTx.Data3=Convert.ToByte(ConvertFromHex(txtDataByte3.Text));
stMessagesTx.Data4=Convert.ToByte(ConvertFromHex(txtDataByte4.Text));

//Clear the Status BitFields
stMessagesTx.StatusBitField = 0;
stMessagesTx.StatusBitField2 = 0;

//Call the Tx funciton
iResult=icsNeoDll.icsneoTxMessages(m_hObject,ref stMessagesTx,1,0);

if(iResult== 0) //Check the status of the Function Call
{
    MessageBox.Show ("Problem Transmitting Message");
}
```
</TabItem>
</Tabs>