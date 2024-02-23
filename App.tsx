import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import { FlashList } from "@shopify/flash-list";

const DATA = [
  {
    "id": "65d7447d42eec65ee995869b",
    "title": 0
  },
  {
    "id": "65d7447dc48de4786e14e0f8",
    "title": 1
  },
  {
    "id": "65d7447d173664a755efea05",
    "title": 2
  },
  {
    "id": "65d7447deee419da0cba72db",
    "title": 3
  },
  {
    "id": "65d7447da2eb92739f7c46c3",
    "title": 4
  },
  {
    "id": "65d7447d436211fb586281d3",
    "title": 5
  },
  {
    "id": "65d7447df7e7b1ef0e01818f",
    "title": 6
  },
  {
    "id": "65d7447dad18e7c2cf0511fa",
    "title": 7
  },
  {
    "id": "65d7447dee3be22b091f86ac",
    "title": 8
  },
  {
    "id": "65d7447d1456d8ac826e80ca",
    "title": 9
  },
  {
    "id": "65d7447da31d4f193c838ae3",
    "title": 10
  },
  {
    "id": "65d7447d79da8ea59171ec99",
    "title": 11
  },
  {
    "id": "65d7447d96cca13ea3460ee5",
    "title": 12
  },
  {
    "id": "65d7447db369a99f3d655795",
    "title": 13
  },
  {
    "id": "65d7447d28c6e51df86951dc",
    "title": 14
  },
  {
    "id": "65d7447d82340f9abc677629",
    "title": 15
  },
  {
    "id": "65d7447d059db6c331d138bc",
    "title": 16
  },
  {
    "id": "65d7447dca7125705ed5647b",
    "title": 17
  },
  {
    "id": "65d7447d216dc02466fba658",
    "title": 18
  },
  {
    "id": "65d7447dd094823784fdcb17",
    "title": 19
  },
  {
    "id": "65d7447d6e538431df4e9b65",
    "title": 20
  },
  {
    "id": "65d7447dfc4174bf6cc7a664",
    "title": 21
  },
  {
    "id": "65d7447ddffd65a108e6e3de",
    "title": 22
  },
  {
    "id": "65d7447d5246417210fa7cb7",
    "title": 23
  },
  {
    "id": "65d7447dbdefee20fc5f407b",
    "title": 24
  },
  {
    "id": "65d7447dfd4d205eb4a231f4",
    "title": 25
  },
  {
    "id": "65d7447d9fc834eff0f81844",
    "title": 26
  },
  {
    "id": "65d7447d0be7fa503a4cc10b",
    "title": 27
  },
  {
    "id": "65d7447db42ea6b627bb5601",
    "title": 28
  },
  {
    "id": "65d7447db4290b849628f5c1",
    "title": 29
  },
  {
    "id": "65d7447d55e168486ad2dac3",
    "title": 30
  },
  {
    "id": "65d7447d9f4622f0cb802a67",
    "title": 31
  },
  {
    "id": "65d7447d4157939a135899f2",
    "title": 32
  },
  {
    "id": "65d7447d4a77268a93048ec4",
    "title": 33
  },
  {
    "id": "65d7447d58621478a4b5c418",
    "title": 34
  },
  {
    "id": "65d7447dd560ac143e1a8126",
    "title": 35
  },
  {
    "id": "65d7447d1db234460a08c7f8",
    "title": 36
  },
  {
    "id": "65d7447da49156f73cd26d30",
    "title": 37
  },
  {
    "id": "65d7447df3c6747c07683670",
    "title": 38
  },
  {
    "id": "65d7447ddd76d2046af1c680",
    "title": 39
  },
  {
    "id": "65d7447d3535dcd275ceacae",
    "title": 40
  },
  {
    "id": "65d7447da8c791e49774c902",
    "title": 41
  },
  {
    "id": "65d7447d6c36a024a4798408",
    "title": 42
  },
  {
    "id": "65d7447d7a3dabf82a7923b8",
    "title": 43
  },
  {
    "id": "65d7447d97902c72fae9b9a4",
    "title": 44
  },
  {
    "id": "65d7447deafe4c93fa9c7fe4",
    "title": 45
  },
  {
    "id": "65d7447d83e98102e84516ad",
    "title": 46
  },
  {
    "id": "65d7447db6665f48ce4b66d4",
    "title": 47
  },
  {
    "id": "65d7447dafd322341cc49379",
    "title": 48
  },
  {
    "id": "65d7447d6c7015572a8a30b4",
    "title": 49
  },
  {
    "id": "65d7447d7a0056d9dbe6dd70",
    "title": 50
  },
  {
    "id": "65d7447dd85fd523d18863a9",
    "title": 51
  },
  {
    "id": "65d7447de5e5778527d177bc",
    "title": 52
  },
  {
    "id": "65d7447dc127f9129c8c3b54",
    "title": 53
  },
  {
    "id": "65d7447d58bd48294924a9c0",
    "title": 54
  },
  {
    "id": "65d7447d974b8647443e9f6c",
    "title": 55
  },
  {
    "id": "65d7447d4328f9a9fa39126a",
    "title": 56
  },
  {
    "id": "65d7447dcaf7721094fb5f8a",
    "title": 57
  },
  {
    "id": "65d7447dae066e9ae5e71117",
    "title": 58
  },
  {
    "id": "65d7447df46eee7d8c5a52bc",
    "title": 59
  },
  {
    "id": "65d7447d3e9865fe27a2d782",
    "title": 60
  },
  {
    "id": "65d7447d62bf177bed39cf76",
    "title": 61
  },
  {
    "id": "65d7447da9c66005d350564b",
    "title": 62
  },
  {
    "id": "65d7447d2ed538e7ebb567db",
    "title": 63
  },
  {
    "id": "65d7447d3243a2384695efe6",
    "title": 64
  },
  {
    "id": "65d7447dba9eb196d230bcb6",
    "title": 65
  },
  {
    "id": "65d7447de0f5e2108bc4217c",
    "title": 66
  },
  {
    "id": "65d7447d911d5deb74ba4e8b",
    "title": 67
  },
  {
    "id": "65d7447d5ba43012939f0f1f",
    "title": 68
  },
  {
    "id": "65d7447dc8575f34032919ae",
    "title": 69
  },
  {
    "id": "65d7447d0d9224b3349a53f6",
    "title": 70
  },
  {
    "id": "65d7447d656c3740311206e2",
    "title": 71
  },
  {
    "id": "65d7447d64888bcbfcc9d215",
    "title": 72
  },
  {
    "id": "65d7447def14ed7fe8f93aff",
    "title": 73
  },
  {
    "id": "65d7447d0a53f953e61da658",
    "title": 74
  },
  {
    "id": "65d7447d2905ac2c188af76b",
    "title": 75
  },
  {
    "id": "65d7447de44e1a4265b48e12",
    "title": 76
  },
  {
    "id": "65d7447d9a6e860b128e2b74",
    "title": 77
  },
  {
    "id": "65d7447d84d5eab8b3f1fbb6",
    "title": 78
  },
  {
    "id": "65d7447d4e67346a4339279d",
    "title": 79
  },
  {
    "id": "65d7447d93864e832ba9e72b",
    "title": 80
  },
  {
    "id": "65d7447d4c63cfca09f891a0",
    "title": 81
  },
  {
    "id": "65d7447dbff6766536b3c6cf",
    "title": 82
  },
  {
    "id": "65d7447d04bb4b7964c52abd",
    "title": 83
  },
  {
    "id": "65d7447d46077c0e9219ab24",
    "title": 84
  },
  {
    "id": "65d7447dfbcf3d88fabc5fdd",
    "title": 85
  },
  {
    "id": "65d7447df7f5a94673f85639",
    "title": 86
  },
  {
    "id": "65d7447d912e69bab25c2461",
    "title": 87
  },
  {
    "id": "65d7447d86324340254bd92b",
    "title": 88
  },
  {
    "id": "65d7447dabc1457f570658b9",
    "title": 89
  },
  {
    "id": "65d7447ddddd794bfe2773a8",
    "title": 90
  },
  {
    "id": "65d7447d05659e4659a899ef",
    "title": 91
  },
  {
    "id": "65d7447d4f7d8ccf48eb09ce",
    "title": 92
  },
  {
    "id": "65d7447db4f3855100af9212",
    "title": 93
  },
  {
    "id": "65d7447dbf30d19c9e8cb161",
    "title": 94
  },
  {
    "id": "65d7447db3e05aa9f140b5fd",
    "title": 95
  },
  {
    "id": "65d7447d9cf3e377fdd49324",
    "title": 96
  },
  {
    "id": "65d7447d11f72260f15c0136",
    "title": 97
  },
  {
    "id": "65d7447d041c6d45878ad584",
    "title": 98
  },
  {
    "id": "65d7447dd1d253fab34a04c3",
    "title": 99
  },
  {
    "id": "65d7447df9130fa0edab3b5d",
    "title": 100
  },
  {
    "id": "65d7447dab7a901568c35156",
    "title": 101
  },
  {
    "id": "65d7447d821e6532e7768653",
    "title": 102
  },
  {
    "id": "65d7447dab2e7eb7db87075b",
    "title": 103
  },
  {
    "id": "65d7447d6c68cff5825166ae",
    "title": 104
  },
  {
    "id": "65d7447de54d20465d7f3b22",
    "title": 105
  },
  {
    "id": "65d7447d3a74bb7df0104b78",
    "title": 106
  },
  {
    "id": "65d7447dcc80c68ceed3049a",
    "title": 107
  },
  {
    "id": "65d7447df6b978adb9c1ae78",
    "title": 108
  },
  {
    "id": "65d7447df93f168e9714326f",
    "title": 109
  },
  {
    "id": "65d7447db0581c8caaf7b14d",
    "title": 110
  },
  {
    "id": "65d7447dc824ea7e77249929",
    "title": 111
  },
  {
    "id": "65d7447d2882cfd235386f2a",
    "title": 112
  },
  {
    "id": "65d7447d1151abaec2b81f64",
    "title": 113
  },
  {
    "id": "65d7447df3d13a6f61e0acce",
    "title": 114
  },
  {
    "id": "65d7447d6a74f535ea1b32a3",
    "title": 115
  },
  {
    "id": "65d7447ddc1f19af65663538",
    "title": 116
  },
  {
    "id": "65d7447d049bdfff7c3f1cdc",
    "title": 117
  },
  {
    "id": "65d7447d41f3ab092539465f",
    "title": 118
  },
  {
    "id": "65d7447d77111c2b0f9e8701",
    "title": 119
  },
  {
    "id": "65d7447d9d35fa9793e0c516",
    "title": 120
  },
  {
    "id": "65d7447de07f6927f66eacc2",
    "title": 121
  },
  {
    "id": "65d7447d6dbd65fabbc72222",
    "title": 122
  },
  {
    "id": "65d7447de2b632f7871c8606",
    "title": 123
  },
  {
    "id": "65d7447d2065092e13cfdc50",
    "title": 124
  },
  {
    "id": "65d7447dbd08d67726d275d3",
    "title": 125
  },
  {
    "id": "65d7447de3a4704f0e75eb99",
    "title": 126
  },
  {
    "id": "65d7447d3bcd88708621af56",
    "title": 127
  },
  {
    "id": "65d7447d14e6146ca425532c",
    "title": 128
  },
  {
    "id": "65d7447dd9dc776d9ad6cd83",
    "title": 129
  },
  {
    "id": "65d7447dbee70dcd4a1942a5",
    "title": 130
  },
  {
    "id": "65d7447de502d40f41924526",
    "title": 131
  },
  {
    "id": "65d7447d434499ab86281fc0",
    "title": 132
  },
  {
    "id": "65d7447d6f74bdca42a591cd",
    "title": 133
  },
  {
    "id": "65d7447d013236a483779886",
    "title": 134
  },
  {
    "id": "65d7447dab29235f20175430",
    "title": 135
  },
  {
    "id": "65d7447da8c64abc14f8a6eb",
    "title": 136
  },
  {
    "id": "65d7447d1b73e6730a3b28ec",
    "title": 137
  },
  {
    "id": "65d7447d50c346e9d0f0799b",
    "title": 138
  },
  {
    "id": "65d7447df1a7a0d889b7c197",
    "title": 139
  },
  {
    "id": "65d7447d62dc07d3926d32ca",
    "title": 140
  },
  {
    "id": "65d7447d18785cf38462b014",
    "title": 141
  },
  {
    "id": "65d7447d541205731fd27905",
    "title": 142
  },
  {
    "id": "65d7447d34463a06efe69c63",
    "title": 143
  },
  {
    "id": "65d7447dfaa0dd295b97df4a",
    "title": 144
  },
  {
    "id": "65d7447dba4be66199d3413f",
    "title": 145
  },
  {
    "id": "65d7447d269ef5d3864f7d5f",
    "title": 146
  },
  {
    "id": "65d7447d4a10f3cc936169c0",
    "title": 147
  },
  {
    "id": "65d7447d010498449e0a0fdc",
    "title": 148
  },
  {
    "id": "65d7447dbb64263e5941d9c7",
    "title": 149
  },
  {
    "id": "65d7447da0ca20945434e012",
    "title": 150
  },
  {
    "id": "65d7447d39b0b2ec7ceae68c",
    "title": 151
  },
  {
    "id": "65d7447da8564bb4741c031c",
    "title": 152
  },
  {
    "id": "65d7447d2620de2d7ef1d73d",
    "title": 153
  },
  {
    "id": "65d7447d0eb4e46240d85ce6",
    "title": 154
  },
  {
    "id": "65d7447d6dd7d59024ccac7c",
    "title": 155
  },
  {
    "id": "65d7447d0bb937a6c187c8df",
    "title": 156
  },
  {
    "id": "65d7447d17e277dd37420bf1",
    "title": 157
  },
  {
    "id": "65d7447deac7f4fc423ce353",
    "title": 158
  },
  {
    "id": "65d7447df27c4372a9cf1b16",
    "title": 159
  },
  {
    "id": "65d7447d5571adb972753368",
    "title": 160
  },
  {
    "id": "65d7447dd7d248cf473aed70",
    "title": 161
  },
  {
    "id": "65d7447dc6b51b9cbd020a7c",
    "title": 162
  },
  {
    "id": "65d7447dd75f3bd5ad79a438",
    "title": 163
  },
  {
    "id": "65d7447dfb443bab496e93e4",
    "title": 164
  },
  {
    "id": "65d7447dc9e3b1c2b74d4265",
    "title": 165
  },
  {
    "id": "65d7447dc7f0a61eb0407764",
    "title": 166
  },
  {
    "id": "65d7447da21209b978447cd4",
    "title": 167
  },
  {
    "id": "65d7447d895d37a6157cc390",
    "title": 168
  },
  {
    "id": "65d7447d91f256eb12b8c053",
    "title": 169
  },
  {
    "id": "65d7447ddac8f25b9a7069dd",
    "title": 170
  },
  {
    "id": "65d7447dd1d4e58fc0c8d2c2",
    "title": 171
  },
  {
    "id": "65d7447d50c36a0e3289384d",
    "title": 172
  },
  {
    "id": "65d7447d47178cfbd76a4067",
    "title": 173
  },
  {
    "id": "65d7447d7145a5e6fc032e10",
    "title": 174
  },
  {
    "id": "65d7447d44b9acae8cdfd16c",
    "title": 175
  },
  {
    "id": "65d7447d72dc45495913bf62",
    "title": 176
  },
  {
    "id": "65d7447d14dd38a031166dbe",
    "title": 177
  },
  {
    "id": "65d7447d6c9067937a441f1c",
    "title": 178
  },
  {
    "id": "65d7447d38eeab8eb3aa8849",
    "title": 179
  },
  {
    "id": "65d7447d830a77dd485ce0df",
    "title": 180
  },
  {
    "id": "65d7447d96837028759e6ac5",
    "title": 181
  },
  {
    "id": "65d7447dadd7db5a9bcc08eb",
    "title": 182
  },
  {
    "id": "65d7447daa5a54e9f21db5be",
    "title": 183
  },
  {
    "id": "65d7447d6f67471aa6124ce0",
    "title": 184
  },
  {
    "id": "65d7447d57f8c2b0bc80a348",
    "title": 185
  },
  {
    "id": "65d7447d4fcaed1de517b71e",
    "title": 186
  },
  {
    "id": "65d7447d0a540d9058ce51a6",
    "title": 187
  },
  {
    "id": "65d7447d535ec2918bb04292",
    "title": 188
  },
  {
    "id": "65d7447d5fa60cce5261da06",
    "title": 189
  },
  {
    "id": "65d7447d6dc3035c883abe3c",
    "title": 190
  },
  {
    "id": "65d7447de16ecdaeb1ff0a70",
    "title": 191
  },
  {
    "id": "65d7447d6d35f8ec0bf86f3a",
    "title": 192
  },
  {
    "id": "65d7447dc44d369863cbed78",
    "title": 193
  },
  {
    "id": "65d7447d0d7aa5702c4ef884",
    "title": 194
  },
  {
    "id": "65d7447d8ed3c4a29e9dec62",
    "title": 195
  },
  {
    "id": "65d7447dce72a95267c91f22",
    "title": 196
  },
  {
    "id": "65d7447db0c8a57ced4faf33",
    "title": 197
  },
  {
    "id": "65d7447dede8bbbc184e6c9a",
    "title": 198
  },
  {
    "id": "65d7447df699dca2034d24d2",
    "title": 199
  },
  {
    "id": "65d7447d335d365ed9651ec0",
    "title": 200
  },
  {
    "id": "65d7447d7a425d32ef7b400c",
    "title": 201
  },
  {
    "id": "65d7447df482f9530cd5c82f",
    "title": 202
  },
  {
    "id": "65d7447dd52e085ebf3c2c0f",
    "title": 203
  },
  {
    "id": "65d7447df03d695f3dc8072e",
    "title": 204
  },
  {
    "id": "65d7447dc909c49f29dfdcae",
    "title": 205
  },
  {
    "id": "65d7447d9adfe1a1562ca0e1",
    "title": 206
  },
  {
    "id": "65d7447d95b4fe81ea4f6978",
    "title": 207
  },
  {
    "id": "65d7447d3b87c3631277815d",
    "title": 208
  },
  {
    "id": "65d7447df3178ee6e6330f00",
    "title": 209
  },
  {
    "id": "65d7447d2beabf59fbb4ce13",
    "title": 210
  },
  {
    "id": "65d7447dae57252cdcfbdddb",
    "title": 211
  },
  {
    "id": "65d7447d2b822f622006dcff",
    "title": 212
  },
  {
    "id": "65d7447d065c4ef07c5c0876",
    "title": 213
  },
  {
    "id": "65d7447dee1541b3e516ff99",
    "title": 214
  },
  {
    "id": "65d7447def7945d598d76690",
    "title": 215
  },
  {
    "id": "65d7447dfaf23dc830b7c8a4",
    "title": 216
  },
  {
    "id": "65d7447d040c137258b5bca0",
    "title": 217
  },
  {
    "id": "65d7447d0bb6f9c40aee9888",
    "title": 218
  },
  {
    "id": "65d7447d71ed6a75411a529c",
    "title": 219
  },
  {
    "id": "65d7447d663a665043b8b340",
    "title": 220
  },
  {
    "id": "65d7447d950a303f0e938805",
    "title": 221
  },
  {
    "id": "65d7447d0232967de457fe49",
    "title": 222
  },
  {
    "id": "65d7447dc65754802ea8edbb",
    "title": 223
  },
  {
    "id": "65d7447d5c4936c4349a1354",
    "title": 224
  },
  {
    "id": "65d7447d7f43a6933b15b9f8",
    "title": 225
  },
  {
    "id": "65d7447db25addfd75db9e75",
    "title": 226
  },
  {
    "id": "65d7447d396eb292c85fc7fe",
    "title": 227
  },
  {
    "id": "65d7447d8a95dabb42f6f428",
    "title": 228
  },
  {
    "id": "65d7447df219dedc945d37d0",
    "title": 229
  },
  {
    "id": "65d7447de7f42b5cb8440521",
    "title": 230
  },
  {
    "id": "65d7447d0a7661da6c212edb",
    "title": 231
  },
  {
    "id": "65d7447dea62eb66088328a4",
    "title": 232
  },
  {
    "id": "65d7447def231c91374eae34",
    "title": 233
  },
  {
    "id": "65d7447d4fc1638291a88c4e",
    "title": 234
  },
  {
    "id": "65d7447d551c7b620b275b03",
    "title": 235
  },
  {
    "id": "65d7447d3fb0580ee21dcbd6",
    "title": 236
  },
  {
    "id": "65d7447d4d3517c00abb7275",
    "title": 237
  },
  {
    "id": "65d7447db00edb63af015fc1",
    "title": 238
  },
  {
    "id": "65d7447d5e5ded4ace2d9ce8",
    "title": 239
  },
  {
    "id": "65d7447d3dc38c443f6289a5",
    "title": 240
  },
  {
    "id": "65d7447d11be9ff9a9e3570d",
    "title": 241
  },
  {
    "id": "65d7447d980ae9b2709aed54",
    "title": 242
  },
  {
    "id": "65d7447dc59f9a654a0f5cd7",
    "title": 243
  },
  {
    "id": "65d7447d34ea5fb3b74f8d95",
    "title": 244
  },
  {
    "id": "65d7447d93d7e7e30f7b65ae",
    "title": 245
  },
  {
    "id": "65d7447d319fd41ea1b1fd2e",
    "title": 246
  },
  {
    "id": "65d7447d27094b26fe01bcb0",
    "title": 247
  },
  {
    "id": "65d7447d06ebcdd28227e9b5",
    "title": 248
  },
  {
    "id": "65d7447d3e1dbcd1bf83a5be",
    "title": 249
  },
  {
    "id": "65d7447d73d74dec146eafe6",
    "title": 250
  },
  {
    "id": "65d7447d0291cf35df094704",
    "title": 251
  },
  {
    "id": "65d7447dc8012c7724c34da9",
    "title": 252
  },
  {
    "id": "65d7447d78ff08ed9baf78dd",
    "title": 253
  },
  {
    "id": "65d7447d83f9aaefc6aab301",
    "title": 254
  },
  {
    "id": "65d7447d808924054fa30fc4",
    "title": 255
  },
  {
    "id": "65d7447de6d4ebb236c02968",
    "title": 256
  },
  {
    "id": "65d7447d2ff2c23992fbea92",
    "title": 257
  },
  {
    "id": "65d7447d3d594069a27bf3c3",
    "title": 258
  },
  {
    "id": "65d7447d2d85304e812cddf0",
    "title": 259
  },
  {
    "id": "65d7447d18e74de948fc0e91",
    "title": 260
  },
  {
    "id": "65d7447d6a594369d3145507",
    "title": 261
  },
  {
    "id": "65d7447dc13fb4ea6ff86178",
    "title": 262
  },
  {
    "id": "65d7447d16a36c44fb615564",
    "title": 263
  },
  {
    "id": "65d7447d31e97cddb1065d00",
    "title": 264
  },
  {
    "id": "65d7447dea67217c5e207a86",
    "title": 265
  },
  {
    "id": "65d7447d6ab987a5990f78ff",
    "title": 266
  },
  {
    "id": "65d7447d0a4f9daf958c03c4",
    "title": 267
  },
  {
    "id": "65d7447de8dec24f469b31ad",
    "title": 268
  },
  {
    "id": "65d7447d22fa028221ea75de",
    "title": 269
  },
  {
    "id": "65d7447dd4681847fffd9b17",
    "title": 270
  },
  {
    "id": "65d7447d20f8389511b4cd23",
    "title": 271
  },
  {
    "id": "65d7447d820292fb0e7ed8c4",
    "title": 272
  },
  {
    "id": "65d7447d99149239bbb666b7",
    "title": 273
  },
  {
    "id": "65d7447d8b88daab14351ae4",
    "title": 274
  },
  {
    "id": "65d7447d6d01a03d872f5b91",
    "title": 275
  },
  {
    "id": "65d7447dbc4b2af2d277b7d8",
    "title": 276
  },
  {
    "id": "65d7447d9c99c7192c3148ba",
    "title": 277
  },
  {
    "id": "65d7447d83c707884d227f1d",
    "title": 278
  },
  {
    "id": "65d7447df7c66e5942ef4c58",
    "title": 279
  },
  {
    "id": "65d7447d3792e55b52767966",
    "title": 280
  },
  {
    "id": "65d7447d27e5d4995e774c34",
    "title": 281
  },
  {
    "id": "65d7447d527193885a694d7d",
    "title": 282
  },
  {
    "id": "65d7447d0f847a08600ab84a",
    "title": 283
  },
  {
    "id": "65d7447d64f121d51fef9bd3",
    "title": 284
  },
  {
    "id": "65d7447d16a302afabdec9e7",
    "title": 285
  },
  {
    "id": "65d7447d7cb64e2fd8b9f65f",
    "title": 286
  },
  {
    "id": "65d7447dca414d38edead3f0",
    "title": 287
  },
  {
    "id": "65d7447dbc699ea2d86626fa",
    "title": 288
  },
  {
    "id": "65d7447dfe37a76149f73273",
    "title": 289
  },
  {
    "id": "65d7447dd6a00b7152b2f5c9",
    "title": 290
  },
  {
    "id": "65d7447d85674a4488b65c5c",
    "title": 291
  },
  {
    "id": "65d7447d974f4f13b22a1266",
    "title": 292
  },
  {
    "id": "65d7447d8def46a6edf586ee",
    "title": 293
  },
  {
    "id": "65d7447dc285f43c34717f93",
    "title": 294
  },
  {
    "id": "65d7447dc086f316c7eff7c1",
    "title": 295
  },
  {
    "id": "65d7447db0d3d8b1bfbef8e2",
    "title": 296
  },
  {
    "id": "65d7447d5b9473c3d7e914b0",
    "title": 297
  },
  {
    "id": "65d7447d330df560823a38a3",
    "title": 298
  },
  {
    "id": "65d7447d7ddef8fea9214cde",
    "title": 299
  },
  {
    "id": "65d7447d90c87022535246ea",
    "title": 300
  },
  {
    "id": "65d7447dee5929db14802901",
    "title": 301
  },
  {
    "id": "65d7447d87275605cfad569d",
    "title": 302
  },
  {
    "id": "65d7447dbeb5dce803f4ae4a",
    "title": 303
  },
  {
    "id": "65d7447de41bea43ba3e7a92",
    "title": 304
  },
  {
    "id": "65d7447d2fdf60df97fdb5e3",
    "title": 305
  },
  {
    "id": "65d7447d956edc449760b515",
    "title": 306
  },
  {
    "id": "65d7447d516c8c85a0a8f217",
    "title": 307
  },
  {
    "id": "65d7447d6f534e3627fa3ca7",
    "title": 308
  },
  {
    "id": "65d7447d1918f61e85400ccd",
    "title": 309
  },
  {
    "id": "65d7447d2f4240c07084125b",
    "title": 310
  },
  {
    "id": "65d7447df504f8ec7f911a83",
    "title": 311
  },
  {
    "id": "65d7447dc33e80ab6a0fdd53",
    "title": 312
  },
  {
    "id": "65d7447d14ce06fd768e4446",
    "title": 313
  },
  {
    "id": "65d7447d77f11d3c58a62cdf",
    "title": 314
  },
  {
    "id": "65d7447d88e3fae5df27c8bd",
    "title": 315
  },
  {
    "id": "65d7447d795091a29162fbbd",
    "title": 316
  },
  {
    "id": "65d7447d5f2e32c5284df93f",
    "title": 317
  },
  {
    "id": "65d7447d28b6f58b4b7f3e31",
    "title": 318
  },
  {
    "id": "65d7447dcc34e7175b1ece2b",
    "title": 319
  },
  {
    "id": "65d7447d67eb15566ae9548b",
    "title": 320
  },
  {
    "id": "65d7447da516735a4b751521",
    "title": 321
  },
  {
    "id": "65d7447da771ce0fa05d7720",
    "title": 322
  },
  {
    "id": "65d7447d054b205f3b2b3c8e",
    "title": 323
  },
  {
    "id": "65d7447d24d70af2d9499902",
    "title": 324
  },
  {
    "id": "65d7447de4a7efa542f92da2",
    "title": 325
  },
  {
    "id": "65d7447d945050ebe8ac7dee",
    "title": 326
  },
  {
    "id": "65d7447dc39ce04cf0674cc2",
    "title": 327
  },
  {
    "id": "65d7447dab6261caa3168f7d",
    "title": 328
  },
  {
    "id": "65d7447d82bccff7be8a0986",
    "title": 329
  },
  {
    "id": "65d7447d33afbd049bf65330",
    "title": 330
  },
  {
    "id": "65d7447d7312c0585110f75f",
    "title": 331
  },
  {
    "id": "65d7447db656680245ce52c3",
    "title": 332
  },
  {
    "id": "65d7447d9493bb643f3782d6",
    "title": 333
  },
  {
    "id": "65d7447db3766ef7ed05e585",
    "title": 334
  },
  {
    "id": "65d7447d338ab884c6e0f1ae",
    "title": 335
  },
  {
    "id": "65d7447d8954bd67d9e1fb39",
    "title": 336
  },
  {
    "id": "65d7447d5c9b22c7780a7680",
    "title": 337
  },
  {
    "id": "65d7447d37836dd326ce5597",
    "title": 338
  },
  {
    "id": "65d7447d0a16bc0927112184",
    "title": 339
  },
  {
    "id": "65d7447d52857af7c2ce0fa9",
    "title": 340
  },
  {
    "id": "65d7447dda74f56cad90cf22",
    "title": 341
  },
  {
    "id": "65d7447dccfb8a119f6f6937",
    "title": 342
  },
  {
    "id": "65d7447d623ea65a0732a5b8",
    "title": 343
  },
  {
    "id": "65d7447d9153a462e99ac7dc",
    "title": 344
  },
  {
    "id": "65d7447dd1663e902902c31e",
    "title": 345
  },
  {
    "id": "65d7447db865e507d3c1a17d",
    "title": 346
  },
  {
    "id": "65d7447d59e775df0f8f3e29",
    "title": 347
  },
  {
    "id": "65d7447dc01c2001a1b4d06a",
    "title": 348
  },
  {
    "id": "65d7447d6653ac2465f1c099",
    "title": 349
  },
  {
    "id": "65d7447d94faade644582b70",
    "title": 350
  },
  {
    "id": "65d7447db587af2264cbf86d",
    "title": 351
  },
  {
    "id": "65d7447d05c08235c91ff13f",
    "title": 352
  },
  {
    "id": "65d7447dd0676993222b7b02",
    "title": 353
  },
  {
    "id": "65d7447d5d2799fcdf745e7f",
    "title": 354
  },
  {
    "id": "65d7447d517236075589e118",
    "title": 355
  },
  {
    "id": "65d7447db618ec5ed092e1a0",
    "title": 356
  },
  {
    "id": "65d7447d634321982e7619c9",
    "title": 357
  },
  {
    "id": "65d7447d8ad35360f76f7c46",
    "title": 358
  },
  {
    "id": "65d7447dd8132d50ce2a7139",
    "title": 359
  },
  {
    "id": "65d7447d7de40b995751e83a",
    "title": 360
  },
  {
    "id": "65d7447d2703aaedc7c83f28",
    "title": 361
  },
  {
    "id": "65d7447d61c22cf9eeafb3c3",
    "title": 362
  },
  {
    "id": "65d7447d24051b7026908d6d",
    "title": 363
  },
  {
    "id": "65d7447d79f6a126acd53b36",
    "title": 364
  },
  {
    "id": "65d7447d1480f0c8367ba9d9",
    "title": 365
  },
  {
    "id": "65d7447dbc0ec6aecc43558b",
    "title": 366
  },
  {
    "id": "65d7447d8b6c50151039c698",
    "title": 367
  },
  {
    "id": "65d7447dbe5caa2cd7d7f6a3",
    "title": 368
  },
  {
    "id": "65d7447d608c26a535cdaba4",
    "title": 369
  },
  {
    "id": "65d7447d9579010b2cf9cac1",
    "title": 370
  },
  {
    "id": "65d7447d92491603a8d40715",
    "title": 371
  },
  {
    "id": "65d7447d59adb957aec0bb6c",
    "title": 372
  },
  {
    "id": "65d7447d6cdd92553914d382",
    "title": 373
  },
  {
    "id": "65d7447da4c038f0bcf61fe6",
    "title": 374
  },
  {
    "id": "65d7447d99b3ef2c449a6c18",
    "title": 375
  },
  {
    "id": "65d7447d753dda4f5766f533",
    "title": 376
  },
  {
    "id": "65d7447db7543b8b669aaede",
    "title": 377
  },
  {
    "id": "65d7447d2c291e0c57ee2683",
    "title": 378
  },
  {
    "id": "65d7447d5211cfafe8cae181",
    "title": 379
  },
  {
    "id": "65d7447dcf922c59a465bb3e",
    "title": 380
  },
  {
    "id": "65d7447dc12786060c190218",
    "title": 381
  },
  {
    "id": "65d7447d8eee75890eff10a6",
    "title": 382
  },
  {
    "id": "65d7447d4206bde4df9d5be4",
    "title": 383
  },
  {
    "id": "65d7447d53e4c7a4e810556c",
    "title": 384
  },
  {
    "id": "65d7447d05ae66ef3a30bcc4",
    "title": 385
  },
  {
    "id": "65d7447d367e03adec3b367a",
    "title": 386
  },
  {
    "id": "65d7447dbfad2086e65faa49",
    "title": 387
  },
  {
    "id": "65d7447dcfdf238dc6a1d0b5",
    "title": 388
  },
  {
    "id": "65d7447d419756cbb7338878",
    "title": 389
  },
  {
    "id": "65d7447d4a0ee9afab3448e3",
    "title": 390
  },
  {
    "id": "65d7447def4edf9b582ecb21",
    "title": 391
  },
  {
    "id": "65d7447df14faa3327a44058",
    "title": 392
  },
  {
    "id": "65d7447d72f38522cf567e95",
    "title": 393
  },
  {
    "id": "65d7447d94803cd74e04891f",
    "title": 394
  },
  {
    "id": "65d7447d4ba5b895272c8045",
    "title": 395
  },
  {
    "id": "65d7447dc70a5689bf072b01",
    "title": 396
  },
  {
    "id": "65d7447d4ab32bb10679cddf",
    "title": 397
  },
  {
    "id": "65d7447dafec0461768a415d",
    "title": 398
  },
  {
    "id": "65d7447ddeaf2c7ae369a962",
    "title": 399
  },
  {
    "id": "65d7447da9eba70335bb0981",
    "title": 400
  },
  {
    "id": "65d7447dd1acd715db9a3d07",
    "title": 401
  },
  {
    "id": "65d7447d581884a9c7c2815c",
    "title": 402
  },
  {
    "id": "65d7447d2d721750a82cd4e9",
    "title": 403
  },
  {
    "id": "65d7447db094f637babf480c",
    "title": 404
  },
  {
    "id": "65d7447d612ab274b732ef3d",
    "title": 405
  },
  {
    "id": "65d7447d0c670c59c3b76fdf",
    "title": 406
  },
  {
    "id": "65d7447d8e07ef7e2e4333cb",
    "title": 407
  },
  {
    "id": "65d7447de44885a7a0d2df83",
    "title": 408
  },
  {
    "id": "65d7447d622ac836e2dcf93a",
    "title": 409
  },
  {
    "id": "65d7447dc2b85118f4387882",
    "title": 410
  },
  {
    "id": "65d7447d38c2b26c9923e452",
    "title": 411
  },
  {
    "id": "65d7447d02a84a13aeb390a0",
    "title": 412
  },
  {
    "id": "65d7447de32b37da38d7193c",
    "title": 413
  },
  {
    "id": "65d7447d1f8205606c4d0702",
    "title": 414
  },
  {
    "id": "65d7447d0632e4f55bd87bab",
    "title": 415
  },
  {
    "id": "65d7447d3a9948f9c68b789d",
    "title": 416
  },
  {
    "id": "65d7447dc4f01995bd12def9",
    "title": 417
  },
  {
    "id": "65d7447dad8d6a87c73bd254",
    "title": 418
  },
  {
    "id": "65d7447d9b23e54929cb5bdd",
    "title": 419
  },
  {
    "id": "65d7447dc5ce2bd87550f5b8",
    "title": 420
  },
  {
    "id": "65d7447db2157f30722b287b",
    "title": 421
  },
  {
    "id": "65d7447da4ce545d9fbac7f3",
    "title": 422
  },
  {
    "id": "65d7447d6bf8da4664ef90ed",
    "title": 423
  },
  {
    "id": "65d7447d5b43238c02707eba",
    "title": 424
  },
  {
    "id": "65d7447db5a3f6a107516e1a",
    "title": 425
  },
  {
    "id": "65d7447d8a8b267e53c8a234",
    "title": 426
  },
  {
    "id": "65d7447de7f30ed71257f3e6",
    "title": 427
  },
  {
    "id": "65d7447dd9134ebd82b4bda9",
    "title": 428
  },
  {
    "id": "65d7447d720d3ac8e9338fc6",
    "title": 429
  },
  {
    "id": "65d7447dc0f5696042925b49",
    "title": 430
  },
  {
    "id": "65d7447d2fa36897934ef965",
    "title": 431
  },
  {
    "id": "65d7447d1c111ea8e22a7ed0",
    "title": 432
  },
  {
    "id": "65d7447d1dde53d6ebf5288c",
    "title": 433
  },
  {
    "id": "65d7447d91dab6d10c3e4c95",
    "title": 434
  },
  {
    "id": "65d7447d14955a7da8478496",
    "title": 435
  },
  {
    "id": "65d7447dfcf665b6b86f6c2b",
    "title": 436
  },
  {
    "id": "65d7447df683ad2350645bbb",
    "title": 437
  },
  {
    "id": "65d7447d77b40cc9ca645d05",
    "title": 438
  },
  {
    "id": "65d7447d9ea96db3367659e9",
    "title": 439
  },
  {
    "id": "65d7447d2ca81690a7041030",
    "title": 440
  },
  {
    "id": "65d7447d401a75fda13760ba",
    "title": 441
  },
  {
    "id": "65d7447df6f88bc74e0caa31",
    "title": 442
  },
  {
    "id": "65d7447d0dee8ea4509cd8c6",
    "title": 443
  },
  {
    "id": "65d7447da950b95063111b9c",
    "title": 444
  },
  {
    "id": "65d7447d225dc752be4cb85c",
    "title": 445
  },
  {
    "id": "65d7447d19c15aa38845f48f",
    "title": 446
  },
  {
    "id": "65d7447de592d59bc9de68b1",
    "title": 447
  },
  {
    "id": "65d7447de2cb9bfdb072e7ab",
    "title": 448
  },
  {
    "id": "65d7447d67c7cde6ee1eb32f",
    "title": 449
  },
  {
    "id": "65d7447d39057ccbcb7e0055",
    "title": 450
  },
  {
    "id": "65d7447d69795a85fc0ca02b",
    "title": 451
  },
  {
    "id": "65d7447db81f31bb0f35e336",
    "title": 452
  },
  {
    "id": "65d7447db0d9bc6dd8304b1b",
    "title": 453
  },
  {
    "id": "65d7447d214e01bb9514e5a5",
    "title": 454
  },
  {
    "id": "65d7447dfa2b48f2e66abca4",
    "title": 455
  },
  {
    "id": "65d7447d84d7747a6a0d3a09",
    "title": 456
  },
  {
    "id": "65d7447da3f1aedef706193b",
    "title": 457
  },
  {
    "id": "65d7447dcaf29858528ed8c3",
    "title": 458
  },
  {
    "id": "65d7447d454b11b770476c43",
    "title": 459
  },
  {
    "id": "65d7447dd0acae6ed171211a",
    "title": 460
  },
  {
    "id": "65d7447dfde880d929abf45d",
    "title": 461
  },
  {
    "id": "65d7447d79ddc51bf54b4f9f",
    "title": 462
  },
  {
    "id": "65d7447d70a3ab1b3cbddd72",
    "title": 463
  },
  {
    "id": "65d7447dfca077f2bd18db37",
    "title": 464
  },
  {
    "id": "65d7447d636dd84eae4c8df8",
    "title": 465
  },
  {
    "id": "65d7447d93cf079ae05fe415",
    "title": 466
  },
  {
    "id": "65d7447d1b61a4bbb75ca7fa",
    "title": 467
  },
  {
    "id": "65d7447d616af7b071e5fadb",
    "title": 468
  },
  {
    "id": "65d7447d3544a3aa28c4ea65",
    "title": 469
  },
  {
    "id": "65d7447d66a3df6cfd7aa928",
    "title": 470
  },
  {
    "id": "65d7447d79cb4ef349df032f",
    "title": 471
  },
  {
    "id": "65d7447d9cda3221fc1ff9d0",
    "title": 472
  },
  {
    "id": "65d7447df8696107bc45c294",
    "title": 473
  },
  {
    "id": "65d7447d8cabae2e7ebce52b",
    "title": 474
  },
  {
    "id": "65d7447d6d480a846b3ee62e",
    "title": 475
  },
  {
    "id": "65d7447d61954391fde442e3",
    "title": 476
  },
  {
    "id": "65d7447dbdbbff2b8ff01271",
    "title": 477
  },
  {
    "id": "65d7447d375602032a113320",
    "title": 478
  },
  {
    "id": "65d7447db3f9593d4b4e9213",
    "title": 479
  },
  {
    "id": "65d7447d20c7b40d7e06625f",
    "title": 480
  },
  {
    "id": "65d7447d15b18cf47838a5fc",
    "title": 481
  },
  {
    "id": "65d7447d78b6dc9159ff34d6",
    "title": 482
  },
  {
    "id": "65d7447de3f35c805089693d",
    "title": 483
  },
  {
    "id": "65d7447dd2eec5efbce7a1a0",
    "title": 484
  },
  {
    "id": "65d7447d4b76a95c3393fe9b",
    "title": 485
  },
  {
    "id": "65d7447d276f7360a84e083d",
    "title": 486
  },
  {
    "id": "65d7447dbe69286a360fd13b",
    "title": 487
  },
  {
    "id": "65d7447d999152676e761a9c",
    "title": 488
  },
  {
    "id": "65d7447d6835cad325c17950",
    "title": 489
  },
  {
    "id": "65d7447d7081b331cdfab4ed",
    "title": 490
  },
  {
    "id": "65d7447de02c1e5bff6a8fc7",
    "title": 491
  },
  {
    "id": "65d7447d643e9ef3f8658864",
    "title": 492
  },
  {
    "id": "65d7447d4a1c040ee9f56f61",
    "title": 493
  },
  {
    "id": "65d7447daf516c53fb53b370",
    "title": 494
  },
  {
    "id": "65d7447da96d9882c5950d6e",
    "title": 495
  },
  {
    "id": "65d7447d20d11b3d4b2b9a34",
    "title": 496
  },
  {
    "id": "65d7447d7fd9f3727525ca8b",
    "title": 497
  },
  {
    "id": "65d7447d8fbce4116bbb505e",
    "title": 498
  },
  {
    "id": "65d7447de4948bb7580c444e",
    "title": 499
  },
  {
    "id": "65d7447da46cccab718e4198",
    "title": 500
  }
];

const DATA2 = [
  {
    id: '11bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '223ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '3358694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '44bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Fourth Item',
  },
  {
    id: '553ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Fifth Item',
  },
  {
    id: '6658694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Sixth Item',
  },
];

type ItemProps = {title: string};

const Item2 = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Item = ({title}: ItemProps) => (
  <View>
    <View style={{backgroundColor: '#e6e6e6', marginVertical:10, padding: 5,}}>
      <Text style={{fontSize:20, fontWeight: 'bold', color:'black'}}>{title}</Text>
    </View>
    <FlashList
        data={DATA2}
        renderItem={({item}) => <Item2 title={item.title} />}
        keyExtractor={item => item.id}
        estimatedItemSize={250}
    />
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexGrow: 1,}}>
        <FlashList
          data={DATA}
          renderItem={({item}) => <Item title={item.title}/>}
          keyExtractor={item => item.id}
          estimatedItemSize={250}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 5,
  },
  title: {
    fontSize: 20,
  },
});

export default App;