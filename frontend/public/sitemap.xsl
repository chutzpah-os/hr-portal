<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html>
      <head>
        <meta charset="UTF-8"/>
        <title>Sitemap — Haniel Rolemberg</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: #f9f9f9;
            color: #111;
            padding: 2rem 1rem;
          }
          .wrap { max-width: 960px; margin: 0 auto; }
          h1 { font-size: 1.25rem; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 0.25rem; }
          .meta { font-size: 0.8rem; color: #888; margin-bottom: 1.5rem; }
          table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.06); }
          thead { background: #f3f3f3; }
          th { padding: 0.6rem 0.8rem; text-align: left; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em; color: #666; font-weight: 600; white-space: nowrap; }
          td { padding: 0.5rem 0.8rem; font-size: 0.78rem; border-top: 1px solid #f0f0f0; vertical-align: middle; }
          td:first-child { max-width: 560px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
          tr:hover td { background: #fafafa; }
          a { color: #1a6be3; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .tag { display: inline-block; font-size: 0.6rem; padding: 0.15rem 0.45rem; border-radius: 99px; background: #eef; color: #557; font-weight: 600; letter-spacing: 0.05em; white-space: nowrap; }
          .p-high { color: #2a7; }
          .p-med  { color: #b80; }
          .p-low  { color: #999; }
        </style>
      </head>
      <body>
        <div class="wrap">
          <h1>Sitemap — hanielrolemberg.com</h1>
          <p class="meta">
            <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs indexadas
          </p>
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Última modificação</th>
                <th>Frequência</th>
                <th>Prioridade</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:sort select="sitemap:priority" order="descending" data-type="number"/>
                <tr>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td><xsl:value-of select="substring(sitemap:lastmod,1,10)"/></td>
                  <td><span class="tag"><xsl:value-of select="sitemap:changefreq"/></span></td>
                  <td>
                    <xsl:attribute name="class">
                      <xsl:choose>
                        <xsl:when test="sitemap:priority >= 0.9">p-high</xsl:when>
                        <xsl:when test="sitemap:priority >= 0.7">p-med</xsl:when>
                        <xsl:otherwise>p-low</xsl:otherwise>
                      </xsl:choose>
                    </xsl:attribute>
                    <xsl:value-of select="sitemap:priority"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
