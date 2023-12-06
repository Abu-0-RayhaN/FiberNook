from rest_framework import renderers
import json

# This is a renderer to render errors with a key errors so that frontend dev can acces all those errors


class UserRenderer(renderers.JSONRenderer):
    charset = 'utf-8'

    def render(self, data, accepted_media_type=None, renderer_context=None):
        response = ''
        if 'ErrorDetail' in str(data):
            response = json.dumps({'errors': data})
        else:
            response = json.dumps(data)

        return response
