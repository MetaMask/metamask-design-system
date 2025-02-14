# Tabs

Tabs allow navigation between different content areas within the same context, with only one tab being active at a time.

## Usage

```tsx
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@metamask/design-system-react-native';

<Tabs value={value} onValueChange={setValue}>
  <TabsList>
    <TabsTrigger value="tokens">Tokens</TabsTrigger>
    <TabsTrigger value="nfts">NFTs</TabsTrigger>
  </TabsList>
  <TabsContent value="tokens">
    <Text>View and manage your token balances.</Text>
  </TabsContent>
  <TabsContent value="nfts">
    <Text>Browse and manage your NFT collection.</Text>
  </TabsContent>
</Tabs>;
```
