import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/models');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Generate a valid minimal glTF 2.0 binary (.glb) containing a smooth low-poly octahedron
// Positions (6 vertices, 3 floats each = 72 bytes)
const positions = new Float32Array([
   0.0,  1.0,  0.0, // 0 top
   0.0, -1.0,  0.0, // 1 bottom
   1.0,  0.0,  0.0, // 2 right
   0.0,  0.0,  1.0, // 3 front
  -1.0,  0.0,  0.0, // 4 left
   0.0,  0.0, -1.0, // 5 back
]);

// Indices (8 triangles, 3 uint16 each = 24 entries = 48 bytes)
const indices = new Uint16Array([
  0, 2, 3,
  0, 3, 4,
  0, 4, 5,
  0, 5, 2,
  1, 3, 2,
  1, 4, 3,
  1, 5, 4,
  1, 2, 5
]);

// Binary buffer: indices first (padded to 4 bytes: 48 bytes is multiple of 4), then positions (72 bytes)
const indicesBuffer = Buffer.from(indices.buffer);
const positionsBuffer = Buffer.from(positions.buffer);
const binBuffer = Buffer.concat([indicesBuffer, positionsBuffer]);

const gltfJson = {
  asset: { version: "2.0", generator: "Portfolio Sample GLB Generator" },
  scenes: [{ nodes: [0] }],
  scene: 0,
  nodes: [{ mesh: 0, name: "SampleGeometry" }],
  meshes: [
    {
      primitives: [
        {
          attributes: { POSITION: 1 },
          indices: 0,
          mode: 4 // TRIANGLES
        }
      ],
      name: "OctahedronMesh"
    }
  ],
  buffers: [{ byteLength: binBuffer.length }],
  bufferViews: [
    { buffer: 0, byteOffset: 0, byteLength: indicesBuffer.length, target: 34963 }, // ELEMENT_ARRAY_BUFFER
    { buffer: 0, byteOffset: indicesBuffer.length, byteLength: positionsBuffer.length, target: 34962 } // ARRAY_BUFFER
  ],
  accessors: [
    {
      bufferView: 0,
      byteOffset: 0,
      componentType: 5123, // UNSIGNED_SHORT
      count: indices.length,
      type: "SCALAR",
      max: [5],
      min: [0]
    },
    {
      bufferView: 1,
      byteOffset: 0,
      componentType: 5126, // FLOAT
      count: positions.length / 3,
      type: "VEC3",
      max: [1.0, 1.0, 1.0],
      min: [-1.0, -1.0, -1.0]
    }
  ]
};

const jsonString = JSON.stringify(gltfJson);
const jsonPadding = (4 - (jsonString.length % 4)) % 4;
const paddedJsonString = jsonString + ' '.repeat(jsonPadding);
const jsonBuffer = Buffer.from(paddedJsonString, 'utf8');

const binPadding = (4 - (binBuffer.length % 4)) % 4;
const paddedBinBuffer = Buffer.concat([binBuffer, Buffer.alloc(binPadding, 0)]);

const totalLength = 12 + 8 + jsonBuffer.length + 8 + paddedBinBuffer.length;

const header = Buffer.alloc(12);
header.writeUInt32LE(0x46546C67, 0); // "glTF"
header.writeUInt32LE(2, 4);          // version 2
header.writeUInt32LE(totalLength, 8);

const jsonChunkHeader = Buffer.alloc(8);
jsonChunkHeader.writeUInt32LE(jsonBuffer.length, 0);
jsonChunkHeader.writeUInt32LE(0x4E4F534A, 4); // "JSON"

const binChunkHeader = Buffer.alloc(8);
binChunkHeader.writeUInt32LE(paddedBinBuffer.length, 0);
binChunkHeader.writeUInt32LE(0x004E4942, 4); // "BIN\0"

const glbBuffer = Buffer.concat([
  header,
  jsonChunkHeader,
  jsonBuffer,
  binChunkHeader,
  paddedBinBuffer
]);

fs.writeFileSync(path.join(outDir, 'sample-geometry.glb'), glbBuffer);
console.log(`Generated valid GLB binary at public/models/sample-geometry.glb (${glbBuffer.length} bytes)`);

