const { Client } = require("pg");

(async () => {
  const client = new Client({
    connectionString: "postgresql://plankadb_user:zzSCEqmHbEbQeL63ssDUPXM8F1NfRkBR@dpg-d1jtr4u3jp1c73eplks0-a.oregon-postgres.render.com:5432/plankadb?sslmode=require",
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log("✅ Conectado com sucesso!");

    // Exemplo: inserir usuário admin
    await client.query(`
      INSERT INTO "users" (username, email, password, isAdmin)
      VALUES ('admin', 'admin@example.com', 'SENHAHASH','thiago', 'crmjkuniversitario@gmail.com', true)
    `);

    console.log("✅ Usuário admin criado!");
    await client.end();
  } catch (err) {
    console.error("❌ Erro ao conectar ou inserir:", err);
  }
})();
